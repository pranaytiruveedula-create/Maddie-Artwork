# Maddie Artwork

A clean, mobile-friendly clothing website for showcasing and selling handcrafted clothing pieces.

## Quick Start

1. Open `index.html` in your browser to preview locally
2. Add your product images to the `images/` folder
3. Update product data in `js/main.js`
4. Set up Stripe payment links (see below)
5. Deploy to GitHub Pages

## Project Structure

```
maddie-artwork/
├── index.html          # Homepage
├── products.html       # Product listing
├── about.html          # About page
├── css/
│   └── styles.css      # All styling
├── js/
│   └── main.js         # Product data & functionality
├── images/             # Product images
└── README.md           # This file
```

## Customization

### Adding Products

Edit the `products` array in `js/main.js`:

```javascript
{
    id: 5,
    name: "Your Product Name",
    price: 199.00,
    currency: "USD",
    image: "images/your-product.jpg",
    category: "tops",        // tops, bottoms, outerwear, accessories
    soldOut: false,
    stripeLink: "https://buy.stripe.com/YOUR_LINK"
}
```

### Updating Social Links

Search and replace these URLs in the HTML files:

* `https://instagram.com/maddieartwork`
* `https://tiktok.com/@maddieartwork`
* `hello@maddieartwork.com`

### Adding Product Images

1. Add images to the `images/` folder
2. Recommended size: 800x800px (square)
3. Use JPG format for photos
4. Name them consistently: `product-1.jpg`, `product-2.jpg`, etc.

## Stripe Payment Setup

### Step 1: Create a Stripe Account

1. Go to [stripe.com](https://stripe.com) and sign up (free)
2. Complete your business profile
3. Add your bank account for payouts

### Step 2: Create Products in Stripe

1. Log into Stripe Dashboard
2. Go to **Products** > **Add Product**
3. Fill in:
   * Name (e.g., "Camo Aari Jorts")
   * Price ($265.00)
   * One-time payment
4. Save the product

### Step 3: Create Payment Links

1. Go to **Payment Links** in Stripe Dashboard
2. Click **New** > Select your product
3. Customize:
   * Add product image
   * Enable shipping address collection
   * Set up confirmation email
4. Copy the payment link URL

### Step 4: Add Links to Your Site

Update `js/main.js` with your payment links:

```javascript
stripeLink: "https://buy.stripe.com/abc123xyz"
```

### Testing Payments

1. Use Stripe's test mode first (toggle in dashboard)
2. Test card number: `4242 4242 4242 4242`
3. Any future expiry date and any 3-digit CVC
4. Switch to live mode when ready

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **New Repository**
3. Name it `maddie-artwork` (or your preferred name)
4. Set to **Public**
5. Click **Create repository**

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**

1. Click **uploading an existing file**
2. Drag all your project files
3. Click **Commit changes**

**Option B: Using Git Command Line**

```bash
cd maddie-artwork
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/maddie-artwork.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in the sidebar
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**

### Step 4: Access Your Site

Your site will be live at:

```
https://YOUR_USERNAME.github.io/maddie-artwork/
```

It may take a few minutes to deploy initially.

## Adding to Instagram Bio

1. Copy your GitHub Pages URL
2. Open Instagram > Edit Profile
3. Paste the URL in the **Website** field
4. Save

## Updating Your Site

After making changes:

1. Commit and push to GitHub
2. GitHub Pages automatically updates (1-2 minutes)

```bash
git add .
git commit -m "Update products"
git push
```

## Custom Domain (Optional)

To use a custom domain like `maddieartwork.com`:

1. Purchase domain from Namecheap, Google Domains, etc.
2. In GitHub repo Settings > Pages > Custom domain
3. Enter your domain
4. Configure DNS with your domain provider:
   * CNAME record: `www` pointing to `YOUR_USERNAME.github.io`
   * A records pointing to GitHub's IPs

## Support

For questions about:

* **Stripe**: [stripe.com/docs](https://stripe.com/docs)
* **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/en/pages)
