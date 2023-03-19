import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faMediumM, faStackOverflow, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const Footer = styled.footer(({theme}) => ({
    position: 'absolute',
    width: 'fit-content',
    bottom: '0',
    margin: 'auto',
    marginTop: 'auto',
    right: theme.layout.pageMargin,
    fontSize: theme.fonts.sizes.small,
    '.footer__social': {
        // background: theme.colors.lively,
        display: 'flex',
        width: '100%',
        marginLeft: 'auto',
        justifyContent: 'space-around',
        'a': {
            color: theme.colors.lively
        }
    },
    '@media (max-width: 767px)': {
        fontSize: '3vw',
        right: '50%',
        transform: 'translateX(50%)'
    },
}))

const Index = () => (
    <Footer className="footer">
        <div className="footer__social">
            <div className="footer__social-item">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chubi-best-9a0a50198/" className="footer__social-link">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
            <div className="footer__social-item">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/chubibest/portfolio" className="footer__social-link">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <div className="footer__social-item">
                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@chubi.best/schema-migration-for-firestore-5bec92080447" className="footer__social-link">
                    <FontAwesomeIcon icon={faMediumM} />
                </a>
            </div>
            <div className="footer__social-item">
                <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/11291815/chubi-best" className="footer__social-link">
                    <FontAwesomeIcon icon={faStackOverflow} />
                </a>
            </div>
            <div className="footer__social-item">
                <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/chubibest" className="footer__social-link">
                    <FontAwesomeIcon icon={faCodepen} />
                </a>
            </div>
            <div className="footer__social-item">
                <a target="_blank" rel="noopener noreferrer" href="https://leetcode.com/chubibest" className="footer__social-link">
                    <FontAwesomeIcon icon={faCode} />
                </a>
            </div>
        </div>
        <div className="footer__copyright">
            <p>© 2023 Designed and Developed by <strong>Chubi Best</strong>.</p>
        </div>
    </Footer>
);

export default Index;
