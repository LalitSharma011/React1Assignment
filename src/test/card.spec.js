import Card from '../Components/card/Card';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react'
// please add your test cases here

describe("Testing Card Component",()=>{
    test("demo test", ()=>{
        console.log("Test executed");
    })
    test("Should have Read Later text in Card",()=>{
    render(<Card/>)
    expect(screen.getByText("Read Later")).toBeInTheDocument()
})
})

export default Card;