/**
 * @module moodle-atto_align-button
 */

/**
 * Atto text editor fontcolor plugin.
 *
 * @namespace M.atto_fontcolor
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

var colors = [
    {
        name: 'white',
        color: '#FFFFFF'
    }, {
        name: 'red',
        color: '#FF0000'
    }, {
        name: 'yellow',
        color: '#FFCF35'
    }, {
        name: 'green',
        color: '#98CA3E'
    }, {
        name: 'blue',
        color: '#7D9FD3'
    }, {
        name: 'black',
        color: '#000000'
    }, {
        name: 'site-green',
        color: '#26B170'
    }, {
        name: 'site-lite-green',
        color: '#7ED348'
    }, {
        name: 'site-blue',
        color: '#01377D'
    }, {
        name: 'site-sky-blue',
        color: '#009DD1'
    }
];

Y.namespace('M.atto_fontcolor').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
initializer: function() {
    var items = [];
    Y.Array.each(colors, function(color) {
        var colorLabel = M.util.get_string('color_' + color.name, 'atto_fontcolor');
        items.push({
            text: '<div class="coloroption" style="background-color: '
                    + color.color + '" aria-label="' + colorLabel + '" title="' + colorLabel + '"></div>',
            callbackArgs: color.color,
            callback: this._changeStyle
        });
    });

    this.addToolbarMenu({
        icon: 'e/text_color',
        overlayWidth: '4',
        menuColor: '#333333',
        globalItemConfig: {
            inlineFormat: true,
            callback: this._changeStyle
        },
        items: items
    });
},

/**
 * Change the font color to the specified color.
 *
 * @method _changeStyle
 * @param {EventFacade} e
 * @param {string} color The new font color
 * @private
 */
_changeStyle: function(e, color) {
    this.get('host').formatSelectionInlineStyle({
        color: color
    });
}
});
