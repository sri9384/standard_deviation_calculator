# Standard Deviation Calculator

## Task description

- Write a PHP script that calculates the standard deviation based on the provided formula.
- Develop a React component that includes a button labeled "Calculate Standard
Deviation" and a display area to show the result.
- Implement an API call from the React component to the PHP script when the button is
clicked.
- Parse and display the retrieved standard deviation result within the display area on the
web page.
- Please provide the code and instructions on how to run and test the application.

## Solution 

- PHP script created that calculates the standard deviation based on the formula. 
- React component 'StandardDeviationCalculator.jsx' is created that includes a input field, button labeled "Calculate Standard
Deviation", and a display area to show the results.
- User input is fetched from the react application.
  - Input format: 1,2,3,4
  - Numbers seperated by a comma(,).
- The number array is passed to the PHP script that is hosted using apche server(XAMPP).
- (Place the calculate_standard_deviation.php file in htdocs of xampp folder in local).
- The php script returns the value of standard deviation and that is caught by the react application and displayed in the display area.

## Steps to run and test the application

1. Create a react application using `npx create-react-app standard_deviation_calculator`.
2. Download the zip folder of this repository and extract the contents for the file.
3. Once the react application is set as per the repository strucuture and the code.
4. Create calculate_standard_deviation.php file in htdocs of XAMPP folder in local system.
5. (Content available in the zip folder)
6. After setting up open XAMPP and run apache.
7. In the react application directory open terminal and start the application using `npm start`.
8. The react application is running in the [localhost:3000](http://localhost:3000/) and the php script in [localhost:80/calculate_standard_deviation.php](http://localhost:80/calculate_standard_deviation).

## Output
![Output1](https://github.com/sri9384/standard_deviation_calculator/assets/109747178/2e920ead-d41b-42e5-a71d-567a76f08b00)
![Output2](https://github.com/sri9384/standard_deviation_calculator/assets/109747178/5cb3e607-4d32-4c5c-b198-6e9c2300ad11)

