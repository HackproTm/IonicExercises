import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component {
  my_notes = [
    {id: 1, title: 'Note 1', description: 'Description for note 1'},
    {id: 2, title: 'Note 2', description: 'Description for note 2'},
    {id: 3, title: 'Note 3', description: 'Description for note 3'},
    {id: 4, title: 'Note 4', description: 'Description for note 4'}
  ];

  note = {id: null, title: null, description: null};
  show_form = false;
  editing = false;

  addNote() {
    this.show_form = true;
    this.editing = false;
    this.note = {id: null, title: null, description: null};
  }

  cancel() {
    this.show_form = false;
    this.editing = false;
    this.note = {id: null, title: null, description: null};
  }

  createNote() {
    if (this.editing) {
      let copy = this;
      this.my_notes.forEach(function(e, i) {
          if (e.id === copy.note.id) {
            copy.my_notes[i] = copy.note;
          }
      });
    } else {
      this.note.id = this.my_notes.length + 1;
      this.my_notes.push(this.note);
    }
    this.show_form = false;
    this.note = {id: null, title: null, description: null};
  }

  delete() {
    let copy = this;
    this.my_notes.forEach(function(e, i) {
      if (e === copy.note) {
        copy.my_notes.splice(i, 1);
      }
    });
    this.show_form = false;
    this.note = {id: null, title: null, description: null};
  }

  viewNote(noteView) {
    this.note = noteView;
    this.show_form = true;
    this.editing = true;
  }
}
