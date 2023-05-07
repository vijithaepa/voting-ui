import React from 'react'
import UserHome from './UserHome'

describe('<UserHome />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserHome />)
  })
})