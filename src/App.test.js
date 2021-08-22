import React from 'react';
import App from './App';
import Home from './Components/Home/Home';
import {render, screen} from '@testing-library/react'

jest.mock("./Components/Home/Home");
jest.mock("./Pages/SpiderSolitaire/SpiderSolitaire");

describe("App Test Route",()=>{
  describe("App component test",()=>{
    test('Should render page header and HomePage on default route', () =>
    {
      Home.mockImplementation(()=><div>Home</div>)
      render( 
        <App/>
      );

      expect(screen.getByText("Home")).toBeInTheDocument();
    });
  });
});