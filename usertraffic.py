import requests
from bs4 import BeautifulSoup
import matplotlib.pyplot as plt
from skimage import io, filters
import numpy as np

# Load the page content
url = "https://adamlimo.github.io"
response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")

# Analyze the page content
headings = soup.find_all(["h1", "h2", "h3", "h4", "h5", "h6"])
paragraphs = soup.find_all("p")
images = soup.find_all("img")

# Create a 2D array to store the heatmap data
heatmap_data = np.zeros((100, 100))  # adjust the size to fit your page

# Assign weights to each element based on its importance
heading = soup.find("div", {"class": "heading"})  # adjust the selector to match your HTML structure
if heading:
    span = heading.find("span")
    if span and span.attrs.get("style"):
        x, y = span.attrs["style"].split(":")[1].strip("px;").split(",")
        x, y = int(x), int(y)
        heatmap_data[y, x] += 1  # headings are moderately important
    else:
        print("No <span> element with style found in the heading.")
else:
    print("No heading element found.")

for paragraph in paragraphs:
    span = paragraph.find("span")
    if span and span.attrs.get("style"):
        x, y = span.attrs["style"].split(":")[1].strip("px;").split(",")
        x, y = int(x), int(y)
        heatmap_data[y, x] += 1  # paragraphs are moderately important
    else:
        print("No <span> element with style found in the paragraph.")

for image in images:
    if image.attrs.get("style"):
        x, y = image.attrs["style"].split(":")[1].strip("px;").split(",")
        x, y = int(x), int(y)
        heatmap_data[y, x] += 3  # images are very important, so give them a high weight
    else:
        print("No style attribute found in the image.")

# Apply a Gaussian filter to smooth the heatmap
if np.any(heatmap_data):  # check if heatmap_data is not empty
    heatmap = filters.gaussian(heatmap_data, sigma=5)
    # Display the heatmap
    plt.imshow(heatmap, cmap="hot", interpolation="nearest")
    plt.show()
else:
    print("No data to display.")