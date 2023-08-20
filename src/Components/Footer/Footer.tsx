import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faMediumM, faStackOverflow, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faCode, faTree } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const Footer = styled.footer(({theme}) => ({
    position: 'absolute',
    width: 'fit-content',
    bottom: '0',
    margin: 'auto',
    right: theme.layout.pageMargin,
    fontSize: theme.fonts.sizes.small,
    '.footer__social': {
        display: 'flex',
        width: '100%',
        marginLeft: 'auto',
        justifyContent: 'space-around',
        'a': {
            color: theme.colors.lively,
        },
        '.footer__social-item': {
            'transition': 'all .4s ease-in-out',
            '&:active, &:hover': {
                transform: 'scale(1.5)'
            }
        }
    },

    '@media (orientation: portrait)': {
        right: '50%',
        fontSize: theme.fonts.sizes.mobile.small,
        transform: 'translateX(50%)',
        width: '95%',
         '.footer__social': {
            width: '100%',
            margin: 'auto'
        }
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
            <div className="footer__social-item">
                <a target="_blank" rel="noopener noreferrer" href="https://tree-visualizer.com" className="footer__social-link">
                    <FontAwesomeIcon icon={faTree} />
                </a>
            </div>
        </div>
        <div className="footer__copyright">
            <p>© 2023 Designed and Developed by <strong>Chubi Best</strong>.</p>
        </div>
    </Footer>
);

export default Index;
