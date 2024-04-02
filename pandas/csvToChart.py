import pandas as pd
import matplotlib.pyplot as plt

# Read the CSV file into a DataFrame
df = pd.read_csv('example.csv')     #temporary pull csv from database

# Group by 'Expense Category' and sum the '$Amount' for each category
expense_group = df.groupby('Expense Category')['$Amount'].sum()

# Plot a pie chart
plt.figure(figsize=(8, 8))
plt.pie(expense_group, labels=expense_group.index, autopct='%1.1f%%', startangle=140)
plt.title('Expense Distribution by Category')

plt.plot()

# Save the pie chart as an image
plt.savefig('pie_chart.png')

# Close the plot to prevent it from being displayed in the notebook
plt.close()

# Generate HTML code to display the pie chart image
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

# Save the HTML code to a file
with open('expense_pie_chart.html', 'w') as f:
    f.write(html_code)
