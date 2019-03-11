'use strict';

(function () {
    'use strict';

    /**
     * The ButtonItalic class provides functionality for styling an selection with italic (em) style.
     *
     * @class ButtonItalic
     * @uses ButtonCommand
     * @uses ButtonKeystroke
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */

    var ButtonItalic = createReactClass({
        displayName: 'ButtonItalic',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonKeystroke],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonItalic
             * @property {Object} editor
             */
            editor: PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonItalic
             * @property {String} label
             */
            label: PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonItalic
             * @property {Number} tabIndex
             */
            tabIndex: PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default italic
             * @memberof ButtonItalic
             * @property {String} key
             * @static
             */
            key: 'italic'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonItalic
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'italic',
                keystroke: {
                    fn: 'execCommand',
                    keys: CKEDITOR.CTRL + 73 /*I*/
                },
                style: 'coreStyles_italic'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @instance
         * @memberof ButtonItalic
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.italic, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-italic', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.italic },
                React.createElement('span', { className: 'ae-icon-italic' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonItalic.key] = AlloyEditor.ButtonItalic = ButtonItalic;
})();