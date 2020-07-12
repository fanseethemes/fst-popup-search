/*!
 * fst popup search
 * http://fanseethemes.com/
 *
 * Copyright (c) fanseethemes
 *
 * License: GPL
 * https://www.gnu.org/licenses/gpl-3.0.html
 */

import defaultOptions from './options';
import {plugin, txt, classNames} from './constants';
import {getSearchFormTemplate} from './utils';

(function($){
    'use strick';
    if($){


        /******************************
         *  Main function
          ******************************/
        $.fn.fstPopupSearch = function( options ){

            //Ensure that provided element is exist on DOM
            if(0 === $(this).length ){
                console.info(txt.elementNotExist);
                return this;
            };

            // Ensure that provided only one fst popup search exist
            if (!$.data(document.body, plugin)) {
                $.data(document.body, plugin, true);
                $.fn.fstPopupSearch.settings = $.extend( {}, defaultOptions, options);
                $.fn.fstPopupSearch.init(this);
            };

        };


        /******************************
         * Initialize the plugin
         ******************************/
        $.fn.fstPopupSearch.init = function(ele){

            const {settings} = this;
            const $body = $('body');
          
            // console.log(settings, 'settings');
            const {action, method, placeholderText, labelText} = settings;

            
            appendSearchForm();
            listenClickEvent();
            listenEscKey();
            this.enableAccessibility();

            /**  
             * Append search form on DOM 
             * @returns {void}
             */
            function appendSearchForm(){

                const template = getSearchFormTemplate({
                    action,
                    method,
                    placeholderText,
                    labelText
                }); 

                !$(`.${classNames.wrapper}`).length && $body.append(template);  
            };

            /** 
             * Check search is open or not
             * @returns {boolean}
             */
            function isSearchOpen(){
                return $('body').hasClass(classNames.active);
            };

            /**
             * Focus on search input
             * @returns {void}
             */
            function focusOnSearch(){
                setTimeout(()=>{
                    $(`.${classNames.wrapper} input`).focus();
                }, 500)
            };

            /** 
             * Open the popup search
             * @retuns {void}
             */
            function openSearch(){
                $body.addClass(classNames.active);
                focusOnSearch();
            }
            
            /** 
             * Focus search opener button
             * @returns {void}
             */
            function focusBtnSearchOpener(){
                $(ele).focus();
            };

            /** 
             * Close the popup search
             * @return {void}
             */
            function closeSearch (){
                $body.removeClass(classNames.active);
                focusBtnSearchOpener();
            }

            /** 
             * Clear input
             * @returns {void}
             */
            function clearInput(){
                isSearchOpen() &&  $(`.${classNames.wrapper} input`).val('');
            };

            /** 
             * Close popup search on press esc key
             * @returns {void}
             */
            function listenEscKey(){
                $(document).on('keydown', e=>{
                    if(27 === e.keyCode)
                        closeSearch();
                })
            }

            /** 
             * Listen click events 
             * @return {void}
             */
            function listenClickEvent(){
                $(ele).on('click', openSearch);
                $(`.${classNames.close}`).on('click', closeSearch);
                $(`.${classNames.clear}`).on('click', e=>{
                    e.preventDefault();
                    clearInput();
                });
            };

        };



        /****************************** 
         * Accessibility tab loop
         ******************************/
        $.fn.fstPopupSearch.enableAccessibility = function(){
            const {firstTab, lastTab, wrapper} = classNames;     

            $(document).on('focus', `.${firstTab}`, e => {
                $(e.target).parents('.'+wrapper).find(`.${classNames.btnSubmit}`).focus();
            });
            
            $(document).on('focus', `.${lastTab}`, e =>{
                $(e.target).parents('.'+wrapper).find(`.${classNames.close}`).focus();
            });
        };


    };

})(window.jQuery || window.$);

