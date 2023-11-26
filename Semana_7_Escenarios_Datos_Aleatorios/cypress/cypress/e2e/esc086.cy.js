import crearTags from './tag';
import useAleatorioTag from './tag_helper';
import tag from './tagData';

context("Actions", () => {
    beforeEach(() => {
      cy.login();
    });

    it("Login con éxito, Crear tag,  agregar Code injection Tag footer - Aleatorio", () => {
        cy.useAprioriTag().then(newTag => {
            crearTags.crearTag(newTag.name, newTag.body)
            cy.useAprioriRandStringTag().then(newString => {
                crearTags.agregarCodeInjectionTagFooter(newTag.name, newString.string, true)
            });
            cy.signOut();
        });
    });    
});