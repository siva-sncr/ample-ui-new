import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faGlobe, faCodeBranch, faSlidersH, faArrowsAltH, faRandom } from '@fortawesome/free-solid-svg-icons';
import ReactSVG from 'react-svg';
import Mdark from '../resources/images/m-dark.svg';
import Zdark from '../resources/images/z-dark.svg';

export const fontIcon = {
    "ROOTNODE": <FontAwesomeIcon icon={faHome} />,
    "REGION": <FontAwesomeIcon icon={faGlobe} />,
    "SUBSTATION": <FontAwesomeIcon icon={faCodeBranch} />,
    "FEEDER": <FontAwesomeIcon icon={faSlidersH} />,
    "LATERAL": <FontAwesomeIcon icon={faRandom} />,
    "SITE": <ReactSVG className="svg-node" src={Mdark} />,
    "LATERAL_SITE": <ReactSVG className="svg-node" src={Zdark} />,
    "CUSTOM_GROUPS": <FontAwesomeIcon icon={faArrowsAltH} />,
    "UNASSIGNED_DEVICES": <FontAwesomeIcon icon={faArrowsAltH} />,
}