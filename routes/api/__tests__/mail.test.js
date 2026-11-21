const express = require('express');
const request = require('supertest');

const mockSendMail = jest.fn();
jest.mock('nodemailer', () => ({
  createTransport: jest.fn(() => ({ sendMail: mockSendMail })),
}));

const mailRouter = require('../mail');

const buildApp = () => {
  const app = express();
  app.use(express.json());
  app.use('/api/mail', mailRouter);
  return app;
};

describe('POST /api/mail', () => {
  const message = {
    name: 'Ada',
    email: 'ada@example.com',
    business: 'Acme',
    text: 'Hello!',
  };

  beforeEach(() => {
    mockSendMail.mockReset();
    process.env.MAIL_USERNAME = 'me@example.com';
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it('sends the message to my inbox and reports success', async () => {
    mockSendMail.mockImplementation((options, callback) => callback(null));

    const res = await request(buildApp()).post('/api/mail').send(message);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'MAIL_SUCCESS' });
    expect(mockSendMail).toHaveBeenCalledWith(
      {
        from: 'me@example.com',
        to: 'me@example.com',
        subject: 'Message from: Ada (ada@example.com) at Acme',
        text: 'Hello!',
      },
      expect.any(Function)
    );
  });

  it('reports a failure when the mail provider errors', async () => {
    mockSendMail.mockImplementation((options, callback) => callback(new Error('smtp down')));

    const res = await request(buildApp()).post('/api/mail').send(message);

    expect(res.status).toBe(500);
    expect(res.body).toEqual({ message: 'MAIL_FAILED' });
  });
});
