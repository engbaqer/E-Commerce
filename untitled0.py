import matplotlib.pyplot as plt

# Sample data
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

# Plot
plt.plot(x, y)

# Customize x-axis tick marks
plt.xticks([1, 2, 3, 4, 5], ['one', 'two', 'three', 'four', 'five'], rotation=45)

# Customize y-axis tick marks
plt.yticks([0, 5, 10, 15], ['0', '5', '10', '15'], color='red')

plt.show()
