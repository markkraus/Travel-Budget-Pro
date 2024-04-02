import pandas as pd
import matplotlib.pyplot as plt

# Read the CSV file into a DataFrame
df = pd.read_csv('example.csv')     #TEMPORARY UNTIL DATABASE IS FULLY IMPLEMENT

# Group by 'Expense Category' and sum the '$Amount' for each category
expense_group = df.groupby('Expense Category')['$Amount'].sum()  

# Ask the user for their preferred type of graph
graph_type = input("Enter 'pie' for a pie chart, 'bar' for a bar graph, or 'line' for a line graph: ") #TEMPORARY UNTIL DATABASE IS FULLY IMPLEMENT

# Plot the selected type of graph
if graph_type == 'pie':
    plt.figure(figsize=(8, 8))
    plt.pie(expense_group, labels=expense_group.index, autopct='%1.1f%%', startangle=140)
    plt.title('Expense Distribution by Category')
    plt.savefig('pie_chart.png')
    plt.close()
    html_code = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Expense Pie Chart</title>
    </head>
    <body>
        <h1>Expense Distribution by Category</h1>
        <img src="pie_chart.png" alt="Pie Chart">
    </body>
    </html>
    """
elif graph_type == 'bar':
    plt.figure(figsize=(10, 6))
    expense_group.plot(kind='bar')
    plt.title('Expense Distribution by Category')
    plt.xlabel('Expense Category')
    plt.ylabel('Total Amount ($)')
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.savefig('bar_chart.png')
    plt.close()
    html_code = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Expense Bar Chart</title>
    </head>
    <body>
        <h1>Expense Distribution by Category</h1>
        <img src="bar_chart.png" alt="Bar Chart">
    </body>
    </html>
    """
elif graph_type == 'line':
    plt.figure(figsize=(10, 6))
    expense_group.plot(kind='line', marker='o')
    plt.title('Expense Distribution by Category')
    plt.xlabel('Expense Category')
    plt.ylabel('Total Amount ($)')
    plt.xticks(rotation=45)
    plt.grid(True)
    plt.tight_layout()
    plt.savefig('line_chart.png')
    plt.close()
    html_code = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Expense Line Chart</title>
    </head>
    <body>
        <h1>Expense Distribution by Category</h1>
        <img src="line_chart.png" alt="Line Chart">
    </body>
    </html>
    """
else:
    print("Invalid input! Please enter 'pie', 'bar', or 'line'.")

# Save the HTML code to a file
with open('expense_chart.html', 'w') as f:
    f.write(html_code)
