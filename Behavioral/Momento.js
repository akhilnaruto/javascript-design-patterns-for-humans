/**
 * Take the example of calculator, where whenever you perform some calculation,
 * the last calculation is saved in memory(i.e momento) so that you can get back to it and may be get it
 * restored using some action buttons
 * 
 * Momento patttern is about capturing and storing the current state of an object in a manner that it can be
 * restored later on a smooth manner
 * 
 * Usually useful when you need to provide some sort of undo functionality
 */

class EditorMemento{
    constructor(content){
        this._content = content;
    }

    getContent(){
        return this._content;
    }
}

class Editor{
    constructor(){
        this._content = '';
    }

    type(words){
        this._content += ` ${words}`;
    }

    getContent(){
        return this._content;
    }

    save(){
        return new EditorMemento(this._content);
    }

    restore(memento){
        this._content = memento.getContent(); 
    }

}


const editor = new Editor();

editor.type('This is first sentence');
editor.type('This is second. ');

const saved = editor.save();

editor.type('And this is third');

console.log(editor.getContent());

editor.restore(saved);

console.log(editor.getContent());

