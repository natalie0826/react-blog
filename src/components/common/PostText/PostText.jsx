import React from 'react';
import PropTypes from 'prop-types';

import './PostText.css';

export const PostText = (props) => {
    PostText.propTypes = {
        text: PropTypes.string.isRequired,
    }

    return (
        <div>
            <hr className="info__divider" />
            <p className="info__text info__text-no-margin">Чатботы и искусственный интеллект для понимания естественного языка (NLU – Natural Language Understanding) тема достаточно горячая, про нее не раз говорилось на Хабре. Тем не менее достаточно редко попадаются верхнеуровневые и структурированные обзоры этих технологий и рынка в целом. В своей статье мы попробуем немного разобраться, чем обусловлен спрос на эти технологии, как выглядит современная диалоговая платформа для NLU, какие компании и разработки присутствуют на этом рынке.</p>
        </div>
    )
}
