from playwright.sync_api import sync_playwright, Page, expect

def test_product_page_header(page: Page):
    # Navigate to the product page
    page.goto("http://localhost:5173/product")

    # Wait for the page to load
    expect(page.get_by_role("heading", name="Our Products")).to_be_visible()

    # Take a screenshot of the initial view (no scroll)
    page.screenshot(path="jules-scratch/verification/product_page_no_scroll.png")

    # Scroll down the page
    page.evaluate("window.scrollBy(0, 200)")

    # Take a screenshot of the scrolled view
    page.screenshot(path="jules-scratch/verification/product_page_scrolled.png")

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        test_product_page_header(page)
        browser.close()

if __name__ == "__main__":
    main()