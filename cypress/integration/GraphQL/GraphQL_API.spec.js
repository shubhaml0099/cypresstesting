
// understanding the application
// write testscenario
// testcase 
// testcase execution

// Testing 

// manually 
// cy.request()
// localhost:49265 --- UI 
// e2e -- intercept and api

// operation -

// to get all Todo
// adding the Todo
// udpdate toDo
// delete toDo

// graphql -- API 
// url same ---- get and post

describe('varify the GraphQL Operations by backend or API', function () {
    it('varify AllTodo operation', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: "allTodos",
                query: `query allTodos {
                    allTodos {
                      id
                      title
                      completed
                      __typename
                    }
                  }`,
                variables: {}
            }
        }).then((responce) => {
            cy.log(responce)
            expect(responce.status).to.eq(200)
            expect(responce.body.data.allTodos.length).to.eq(5)
            expect(responce.body.data.allTodos).to.length(5)
        })
    })

    it('varify AddTodo operation', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: "AddTodo",
                query: `mutation AddTodo($title: String!) {
                    createTodo(title: $title, completed: false) {
                      id
                      __typename
                    }
                  }`,
                variables: { "title": "hello" }
            }
        }).then((responce) => {
            cy.log(responce)
            expect(responce.body.data.createTodo).to.have.property('id')
        })
    })


    it.only('varify UpdateTodo operation', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: "allTodos",
                query: `query allTodos {
                    allTodos {
                      id
                      title
                      completed
                      __typename
                    }
                  }`,
                variables: {}
            }
            
        }).then((res) => {
            expect(res.status).to.eq(200)
            var id = res.body.data.allTodos[0].id
            return id

        }).then((id) => {


            cy.request({
                method: "POST",
                url: "http://localhost:3000/",
                body: {
                    operationName: "updateTodo",
                    query: `mutation updateTodo($id: ID!, $completed: Boolean!) {
                    updateTodo(id: $id, completed: $completed) {
                      id
                      title
                      completed
                      __typename
                    }
                  }`,
                    variables: { id: `${id}`, completed: true }
                }
            }).then((responce) => {
                cy.log(responce)
                expect(responce.status).to.eq(200)
            })
        })
    })

    
})


//  C:\Users\HP\Desktop\cypressTesting\cypress\integration\GraphQL\GraphQL_API.spec.js