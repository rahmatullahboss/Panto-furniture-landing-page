from playwright.sync_api import Page, expect

def test_product_description(page: Page):
    """
    This test verifies that the product description is displayed correctly
    on the single product page.
    """
    # 1. Arrange: Go to a single product page.
    page.goto("http://localhost:5173/product/1")

    # 2. Assert: Confirm the product description is visible.
    # We expect the page to contain the product description.
    description = page.locator("p.text-gray-600.mb-8")
    expect(description).to_be_visible()
    expect(description).not_to_be_empty()

    # 3. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")