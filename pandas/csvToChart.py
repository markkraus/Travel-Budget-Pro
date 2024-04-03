import pandas as pd
import matplotlib.pyplot as plt

# Read the CSV file into a DataFrame
df = pd.read_csv('example.csv')     #TEMPORARY UNTIL DATABASE IS FULLY IMPLEMENTED

# Group by 'Expense Category' and sum the '$Amount' for each category
expense_group = df.groupby('Expense Category')['$Amount'].sum()

# Convert 'Date' column to datetime format
df['Date'] = pd.to_datetime(df['Date'])

# Group by 'Date' and sum the '$Amount' for each date
total_spent_over_time = df.groupby('Date')['$Amount'].sum()

# Calculate cumulative sum of expenses over time
cumulative_expenses = total_spent_over_time.cumsum()

# Ask the user for their preferred type of graph
graph_type = input("Enter 'pie' for a pie chart, 'bar' for a bar graph, or 'line' for a line graph: ")  #TEMPORARY UNTIL DATABASE IS FULLY IMPLEMENTED

# Plot the selected type of graph
if graph_type == 'pie':
    # Plot pie chart
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
        <img src="reportCharts/pie_chart.png" alt="Pie Chart">
    </body>
    </html>
    """
elif graph_type == 'bar':
    # Plot bar chart
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
        <img src="reportCharts/bar_chart.png" alt="Bar Chart">
    </body>
    </html>
    """
elif graph_type == 'line':
    # Plot line chart for money spent over time
    plt.figure(figsize=(10, 6))
    cumulative_expenses.plot(kind='line', marker='o')
    plt.title('Cumulative Money Spent Over Time')
    plt.xlabel('Date')
    plt.ylabel('Total Amount ($)')
    plt.grid(True)
    plt.tight_layout()
    plt.savefig('line_chart.png')
    plt.close()
    html_code = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Cumulative Money Spent Over Time</title>
    </head>
    <body>
        <h1>Cumulative Money Spent Over Time</h1>
        <img src="reportCharts/line_chart.png" alt="Line Chart">
    </body>
    </html>
    """
else:
    print("Invalid input! Please enter 'pie', 'bar', or 'line'.")

# Save the HTML code to a file
with open('../public/expense_chart.html', 'w') as f:
    f.write(html_code)
