import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faMediumM, faStackOverflow, faCodepen, faGit } from '@fortawesome/free-brands-svg-icons';
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
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/victoronwuzor" className="footer__social-link">
                    <FontAwesomeIcon icon={faCodepen} />
                </a>
            </div>
            <div className="footer__social-item">
                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/victoronwuzor" className="footer__social-link">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
            <div className="footer__social-item">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/onwuvic" className="footer__social-link">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <div className="footer__social-item">
                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@victoronwuzor" className="footer__social-link">
                    <FontAwesomeIcon icon={faMediumM} />
                </a>
            </div>
            <div className="footer__social-item">
                <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/5954989/okwyvic" className="footer__social-link">
                    <FontAwesomeIcon icon={faStackOverflow} />
                </a>
            </div>
            <div className="footer__social-item">
                <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/5954989/okwyvic" className="footer__social-link">
                    <FontAwesomeIcon icon={faGit} />
                </a>
            </div>
        </div>
        <div className="footer__copyright">
            <p>© 2023 Designed and Developed by <strong>Chubi Best</strong>.</p>
        </div>
    </Footer>
);

export default Index;
