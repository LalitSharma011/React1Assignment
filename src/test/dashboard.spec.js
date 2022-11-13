import Dashboard from '../Components/dashboard/Dashboard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react'
import { render as renderer, unmountComponentAtNode } from 'react-dom'
// please add your test cases here

let element;
beforeEach(() => {
    element = document.createElement("div")
    document.body.appendChild(element)
})
afterEach(() => {
    unmountComponentAtNode(element)
    element.remove()
    element = null
})

it("Should have 1 div tab in Dashboard component", () => {
    renderer(<Dashboard />, element)
    const count = element.getElementsByTagName('div').length
    expect(count).toBe(1)
})

test("Should have container class in dashboardId", () => {
    render(<Dashboard />)
    expect(screen.getByTestId("dashboardId")).toHaveClass("container")
})

test("div tag should have container class",()=>{
    renderer(<Dashboard/>,element)
    const links=element.getElementsByTagName("div")
    for (let index = 1; index < links.length; index++) {
        expect(links[index]).toHaveClass("container")
    }
})

describe("Testing Dashboard Component",()=>{
    test("demo test", ()=>{
        console.log("Test executed");
    })
    test("Should POST text in Dashboard",()=>{
    render(<Dashboard/>)
    expect(screen.getByDisplayValue("readLater")).toBeInTheDocument()
})
})



export default Dashboard;