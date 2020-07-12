
import {icons, classNames} from './constants';

const {enterIcon, clearIcon, closeIcon} = icons;


export const getSearchFormTemplate = ({
    action,
    method,
    placeholderText,
    labelText
}) =>`  <div class="${classNames.wrapper}">
            <span class="${classNames.firstTab}" tabindex="0"></span>
            <button class="${classNames.close}">${closeIcon}</button>
            ${labelText ? `<h3>${labelText}</h3>`: ''}
            <form role="search" method="${method}" class="${classNames.form}" action="${action}">	
                <input type="text" class="search-field" placeholder="${placeholderText}" value="" name="s" />
                <div class="${classNames.btnWrapper}">
                    <div><a href="#" title="Clear text" class="${classNames.clear}">${clearIcon}</a></div>
                    <button type="submit" title="Search" class="${classNames.btnSubmit}">${enterIcon}</button> 
                </div>
            </form>
            <span class="${classNames.lastTab}" tabindex="0"></span>
        </div>`;