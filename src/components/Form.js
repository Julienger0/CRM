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

                        
                    </div>
                </form>
            </div>
         );
    }
}

export default Form;