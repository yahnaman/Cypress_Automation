class home
{
verify_validlogin()
{
    cy.get('#customer_menu_top > li > a').should('have.text','Login or register').click()// Login Button click 
    cy.get('#loginFrm_loginname').type('Testcase6140').should('have.value','Testcase6140')//  Login Name
    cy.wait(1000)
    cy.get('#loginFrm_password').type('testng12').should('have.value','testng12') //  // Password
    cy.wait(1000)
    cy.get('#loginFrm > fieldset > .btn').should('contain','Login').click() // Login submit button
    cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text').should('have.text','Welcome back test') //when Login success
    cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click() // click on   Apparel & accessories
    cy.get('.maintext').should('have.text','Apparel & accessories')
    cy.wait(1000)
}
verify_Category_Menu()
{
    cy.wait(1000)
    cy.get('#categorymenu').should('exist').as('Category Menu')
    cy.wait(1000)
    cy.get('.maintext').should('have.text','Apparel & accessories')
    cy.wait(1000)
}
verify_ViewProduct()
{
   // cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click() // click on   Apparel & accessories
    cy.get(':nth-child(1) > .thumbnail > :nth-child(1) > img').eq(0).trigger('mouseover')
    cy.contains('View').should('have.text','View').click()
    cy.get('.easyzoom > .local_image > img').trigger('mouseover')
    cy.wait(1000)
}
verify_Clicked_One_Product_Name()
{
    cy.wait(1000)
    cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').click()
    
    cy.wait(1000)
    cy.get(':nth-child(2) > .fixed_wrapper > .fixed > .prdocutname').should('have.text','Tropiques Minerale Loose Bronzer').click()
    cy.get('.bgnone').should('have.text','Tropiques Minerale Loose Bronzer')
    cy.wait(1000)

}
verify_Qty_AddcartButton()
{ cy.wait(1000)
    cy.get('#product_quantity').clear()
    cy.wait(1000)
    cy.get('#product_quantity').type('6').should('have.value','6')
    cy.wait(1000)
    cy.get('.cart').should('contain','Add to Cart').click()
    cy.wait(2000)
}
verify_SHOPPING_CART()
{
    cy.wait(1000)
    cy.get('.maintext').should('have.text',' Shopping Cart')

     cy.get('#cart_checkout1').should('contain','Checkout').click()

}
verify_Checkout_CONFIRMATION()
{
    cy.wait(1000)
    cy.reload()
     cy.get('#loginFrm_loginname').type('Testcase6140')//  Login Name

     cy.get('#loginFrm_password').type('testng12') //  // Password
    cy.wait(1000)
    cy.get('#loginFrm > fieldset > .btn').click() // Login submit button
    cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').click()
    cy.get(':nth-child(2) > .fixed_wrapper > .fixed > .prdocutname').click()
    cy.get('.cart').click()
     cy.get('#cart_checkout1').click()
     cy.wait(2000)
     cy.get('.maintext').should('have.text',' Checkout Confirmation')
     cy.wait(1000)
     cy.get('#checkout_btn').should('contain','Confirm Order').click()
     cy.wait(1000)
}
verify_OrderProcessed()
{
    cy.get('.maintext').should('have.text',' Your Order Has Been Processed!')
    //cy.get('.mb40 > .btn').should('contain','Continue')
}
}
module.exports = home;