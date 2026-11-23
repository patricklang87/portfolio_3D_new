import React from 'react';
import './ProfessionalHighlights.css';
import githubLogo from '../../assets/logos/GitHub-Mark-64px.png';
import { professionalHighlights } from './highlightsData';

const COLUMN_HEADINGS = ['Workplace', 'Team', 'Years', 'Contributions'];

function ContributionsList({ contributions = [] }) {
    return (
        <ul className="contributionsList">
            {contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
            ))}
        </ul>
    );
}

// On phones each row becomes a stacked card (see the CSS), which hides the
// header row. The explicit ARIA roles keep table semantics for screen readers
// once the table elements are no longer displayed as a table.
export default function ProfessionalHighlights() {
    return (
        <section className="ProfessionalHighlights" id="experience" aria-labelledby="experienceTitle">
            <h2 id="experienceTitle">Professional highlights</h2>
            <table className="highlightsTable" role="table">
                <thead role="rowgroup">
                    <tr role="row">
                        {COLUMN_HEADINGS.map((heading) => (
                            <th key={heading} role="columnheader" scope="col">{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody role="rowgroup">
                    {professionalHighlights.map((highlight) => (
                        <tr key={highlight.workplace} role="row">
                            <th scope="row" role="rowheader" data-label="Workplace">
                                {highlight.workplace}
                                {highlight.githubUrl && (
                                    <a
                                        className="githubLink"
                                        href={highlight.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`GitHub activity at ${highlight.workplace}`}
                                    >
                                        <img src={githubLogo} alt="" />
                                    </a>
                                )}
                            </th>
                            <td role="cell" data-label="Team">{highlight.team}</td>
                            <td role="cell" data-label="Years">{highlight.years}</td>
                            <td role="cell" data-label="Contributions">
                                <ContributionsList contributions={highlight.contributions} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
