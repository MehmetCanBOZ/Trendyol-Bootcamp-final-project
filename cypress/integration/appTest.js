describe('renders the home page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.viewport(1900,1500)
    cy.waitForReact(1000, '#root');
  });

  it("renders correctyl home page",()=>{
    cy.get(".home").should("exist")
  });

  it("click Startgame button to direct the game correctyl",()=>{
    cy.get('[data-test=home-game-button]').click();
    cy.url().should("include","game")
  });
});

describe('renders the game page', () => {
  beforeEach(() => {
    cy.visit('/game')
    cy.viewport(1900,1500)
    cy.waitForReact(1000, '#root');
  });

  it("renders correctly the main",()=>{
    cy.get(".main").should("exist")
    cy.react('Header').should('have.length', '1');
    cy.react('RemainingCards').should('have.length', '1');
    cy.react('HandsHolder').should('have.length', '1');
    cy.react('CardGrid').should('have.length', '10');
  });
   
  it("renders correctyl to main decks",()=>{
    cy.get(".main").children().should('have.length', 10)
  });
    
  it("renders correctyl to deck id as a single",()=>{
    cy.get("#0").should('have.length', 1)
  });
  
  it("not renders modal when game start",()=>{
    cy.react('Modal').should('not.exist');
  });

  it("not renders correctyl to deck of 11",()=>{
    cy.get("#11").should('have.length', 0)
  });
  
  it("not renders holder when game start",()=>{
    cy.get("#holder").should('have.length', 0)
  });
  
  it("renders Card correctly",()=>{
    cy.react('Card').should('have.length', 54)    
  });
    
  it("add new Cards to decks when click the deal",()=>{
    cy.get("#0").children().children().should('have.length', 6)
    cy.get('[data-test=rem-cards]').click();
    cy.get("#0").children().children().should('have.length', 7)
    cy.get('[data-test=rem-cards]').click();
    cy.get("#0").children().children().should('have.length', 8)
  });
});