import React, { Component } from 'react';

class Form extends Component {
    render() { 
        return ( 
            <div class="row">
                <form class="col s12" id="addContact">
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="prenom" type="text" class="validate"/>
                            <label htmlFor="prenom">Prénom</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="nom" type="text" class="validate"/>
                            <label htmlFor="nom">Nom de Famille</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="email" type="text" class="validate"/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="compagnie" type="text" class="validate"/>
                            <label htmlFor="compagnie">Compagnie</label>
                        </div>                       
                    </div>
                    <div class="row">
                        <div class="input-field col s8">
                            <input id="notes" type="text" class="validate"/>
                            <label htmlFor="notes">Notes</label>
                        </div>
                        <div class="input-field col s4">
                            <button className='btn waves-effect waves-light' type='submit' name='action'>Ajouter</button>
                        </div>                       
                    </div>
                </form>
            </div>
         );
    }
}

export default Form;