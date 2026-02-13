# 🛒 E-SOFT E-COMMERCE STORE + ODOO INTEGRATION
## Complete Online Shopping System

---

## 🎯 BUSINESS STRATEGY

### Why E-Commerce for E-SOFT?

**Current Challenge:**
- Customers browse online but must call/email for quote
- Lead qualification happens manually
- No instant purchase option for standard residential units

**E-Commerce Solution:**
- **Residential**: Buy standard units online instantly
- **Commercial/Industrial**: Start with online product selector → Expert consultation
- **Accessories**: Buy spare parts, coils, mounting kits online
- **Subscriptions**: Annual maintenance plans

---

## 🏗️ E-COMMERCE ARCHITECTURE

### Product Catalog Structure

```
E-SOFT PRODUCTS
├── Residential Units (Buy Online)
│   ├── Home Basic (2-4 people)
│   ├── Home Standard (4-6 people)
│   ├── Home Premium (6-8 people)
│   └── Villa/Luxury (8+ people)
│
├── Commercial Systems (Request Quote)
│   ├── Small Business (10-50 people)
│   ├── Medium Business (50-200 people)
│   └── Large Enterprise (200+ people)
│
├── Industrial Systems (Request Quote)
│   ├── Light Industrial
│   ├── Medium Industrial
│   └── Heavy Industrial
│
├── Agriculture Systems (Request Quote)
│   ├── Small Farm (1-5 acres)
│   ├── Medium Farm (5-20 acres)
│   └── Large Farm (20+ acres)
│
└── Accessories & Parts (Buy Online)
    ├── Replacement Coils
    ├── Mounting Kits
    ├── Extension Cables
    ├── Maintenance Plans (Annual)
    └── Installation Services
```

---

## 💳 PRODUCT PRICING STRATEGY

### 1. RESIDENTIAL - DIRECT PURCHASE

**Home Basic (E-SOFT RES-2000)**
- Suitable for: 2-4 people, 1-2 bathrooms
- Pipe size: Up to 1 inch
- Price: ₹35,000
- **BUY NOW** button

**Home Standard (E-SOFT RES-4000)**
- Suitable for: 4-6 people, 2-3 bathrooms
- Pipe size: 1-1.5 inch
- Price: ₹45,000
- **BUY NOW** button

**Home Premium (E-SOFT RES-6000)**
- Suitable for: 6-8 people, 3-4 bathrooms
- Pipe size: 1.5-2 inch
- Price: ₹55,000
- **BUY NOW** button

**Villa/Luxury (E-SOFT RES-8000)**
- Suitable for: 8+ people, 4+ bathrooms
- Pipe size: 2+ inch
- Price: ₹75,000
- **BUY NOW** button

### 2. COMMERCIAL - CUSTOM QUOTE

**Product Listings:**
- Show specifications
- Show starting price (e.g., "Starting from ₹1,20,000")
- **REQUEST QUOTE** button
- Fill form → Odoo creates lead

### 3. ACCESSORIES - DIRECT PURCHASE

**Replacement Coil (Universal)**
- Price: ₹5,000
- **BUY NOW**

**Professional Installation Service**
- Price: ₹3,000 (included free with system purchase)
- **ADD TO CART**

**Annual Maintenance Plan**
- Price: ₹2,000/year
- Includes: Annual inspection, cleaning, testing
- **SUBSCRIBE**

---

## 🔗 ODOO CRM INTEGRATION

### Integration Points

```
NEXTJS E-COMMERCE ←→ ODOO
│
├── Customer Registration → Odoo Contacts
├── Product Browse → Odoo Products
├── Add to Cart → Odoo Sales Order (Draft)
├── Checkout → Odoo Sales Order (Confirmed)
├── Payment → Odoo Payments
├── Order Status → Odoo Delivery
├── Invoice → Odoo Invoices
└── Support Tickets → Odoo Helpdesk
```

### Odoo Modules Required

1. **Sales** - Order management
2. **Inventory** - Stock management
3. **Accounting** - Invoicing & payments
4. **Website** (optional) - Can use Next.js instead
5. **CRM** - Lead management for quotes
6. **Project** - Installation tracking
7. **Helpdesk** - Customer support

### API Integration Architecture

```typescript
// Odoo JSON-RPC API Integration

NEXT.JS APP
    ↓
  API Routes (/api/odoo/*)
    ↓
Odoo JSON-RPC
    ↓
ODOO SERVER
```

---

## 🛍️ SHOPPING FLOW

### Flow 1: Residential Purchase (Direct Buy)

```
1. Browse Products → /shop/residential
2. Select Product → "Home Standard ₹45,000"
3. View Details → Specs, images, reviews
4. Add to Cart → Cart icon updates
5. Checkout → Login/Register (Odoo Contact)
6. Enter Address → Saved in Odoo
7. Choose Payment → Razorpay/PayU/COD
8. Confirm Order → Odoo Sales Order created
9. Pay Online → Payment recorded in Odoo
10. Order Confirmation → Email + SMS
11. Track Order → Real-time from Odoo
12. Installation Scheduled → Odoo Project
13. Installation Complete → Mark in Odoo
14. Review & Rating → Save in Odoo
```

### Flow 2: Commercial/Industrial (Quote Request)

```
1. Browse Products → /shop/commercial
2. Select Product → "Small Business System"
3. View Details → Specs, applications
4. Request Quote → Fill form
5. Form Submission → Odoo Lead created
6. Sales Team Notified → Odoo CRM
7. Expert Calls → Within 2 hours
8. Site Survey Scheduled → Odoo Calendar
9. Custom Quote Sent → Odoo Quotation
10. Customer Approves → Convert to Order
11. Order Confirmed → Odoo Sales Order
12. Rest same as Flow 1
```

---

## 📂 FILE STRUCTURE

```
/app
  /shop
    /page.tsx                    # Main shop page
    /[category]
      /page.tsx                  # Category page (residential, commercial, etc)
      /[slug]
        /page.tsx                # Product detail page
    /cart
      /page.tsx                  # Shopping cart
    /checkout
      /page.tsx                  # Checkout page
    /orders
      /page.tsx                  # Order history
      /[orderId]
        /page.tsx                # Order details
  /api
    /odoo
      /products
        /route.ts                # Fetch products from Odoo
      /cart
        /route.ts                # Cart operations
      /orders
        /route.ts                # Create/update orders
      /customers
        /route.ts                # Customer operations
      /payment
        /route.ts                # Payment processing

/lib
  /odoo
    /client.ts                   # Odoo API client
    /products.ts                 # Product operations
    /orders.ts                   # Order operations
    /customers.ts                # Customer operations
    /crm.ts                      # CRM/Lead operations

/components
  /shop
    /product-card.tsx            # Product listing card
    /product-detail.tsx          # Product detail view
    /product-filter.tsx          # Category filters
    /cart-item.tsx               # Cart item component
    /checkout-form.tsx           # Checkout form
    /order-summary.tsx           # Order summary
    /payment-options.tsx         # Payment selection
    /order-tracking.tsx          # Order status tracker
```

---

## 💻 ODOO API INTEGRATION CODE

### 1. Odoo Client Setup

```typescript
// lib/odoo/client.ts

import Odoo from 'odoo-xmlrpc';

interface OdooConfig {
  url: string;
  db: string;
  username: string;
  password: string;
}

export class OdooClient {
  private odoo: any;
  private config: OdooConfig;
  private uid: number | null = null;

  constructor(config: OdooConfig) {
    this.config = config;
    this.odoo = new Odoo({
      url: config.url,
      port: 443,
      db: config.db,
      username: config.username,
      password: config.password,
    });
  }

  async connect(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.odoo.connect((err: any, uid: number) => {
        if (err) {
          reject(err);
        } else {
          this.uid = uid;
          resolve(uid);
        }
      });
    });
  }

  async execute(
    model: string,
    method: string,
    params: any[] = [],
    kwargs: any = {}
  ): Promise<any> {
    if (!this.uid) {
      await this.connect();
    }

    return new Promise((resolve, reject) => {
      this.odoo.execute_kw(
        this.config.db,
        this.uid,
        this.config.password,
        model,
        method,
        params,
        kwargs,
        (err: any, result: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  // Search records
  async search(model: string, domain: any[] = []): Promise<number[]> {
    return this.execute(model, 'search', [domain]);
  }

  // Read records
  async read(model: string, ids: number[], fields: string[] = []): Promise<any[]> {
    return this.execute(model, 'read', [ids], { fields });
  }

  // Search and read
  async searchRead(
    model: string,
    domain: any[] = [],
    fields: string[] = [],
    limit?: number
  ): Promise<any[]> {
    return this.execute(
      model,
      'search_read',
      [domain],
      { fields, limit }
    );
  }

  // Create record
  async create(model: string, values: any): Promise<number> {
    return this.execute(model, 'create', [values]);
  }

  // Update record
  async write(model: string, ids: number[], values: any): Promise<boolean> {
    return this.execute(model, 'write', [ids, values]);
  }

  // Delete record
  async unlink(model: string, ids: number[]): Promise<boolean> {
    return this.execute(model, 'unlink', [ids]);
  }
}

// Singleton instance
let odooClient: OdooClient | null = null;

export function getOdooClient(): OdooClient {
  if (!odooClient) {
    odooClient = new OdooClient({
      url: process.env.ODOO_URL || 'https://your-odoo.com',
      db: process.env.ODOO_DB || 'your-database',
      username: process.env.ODOO_USERNAME || 'admin',
      password: process.env.ODOO_PASSWORD || 'admin',
    });
  }
  return odooClient;
}
```

### 2. Product Operations

```typescript
// lib/odoo/products.ts

import { getOdooClient } from './client';

export interface Product {
  id: number;
  name: string;
  description: string;
  list_price: number;
  image_1920?: string;
  categ_id: [number, string];
  qty_available: number;
  default_code?: string;
  // E-SOFT specific fields
  pipe_size?: string;
  suitable_for?: string;
  warranty_years?: number;
}

export async function getProducts(category?: string): Promise<Product[]> {
  const client = getOdooClient();
  
  let domain: any[] = [['sale_ok', '=', true]];
  
  if (category) {
    domain.push(['categ_id.name', '=', category]);
  }

  const products = await client.searchRead(
    'product.product',
    domain,
    [
      'name',
      'description',
      'list_price',
      'image_1920',
      'categ_id',
      'qty_available',
      'default_code',
      'pipe_size',
      'suitable_for',
      'warranty_years',
    ]
  );

  return products;
}

export async function getProduct(id: number): Promise<Product | null> {
  const client = getOdooClient();
  
  const products = await client.read(
    'product.product',
    [id],
    [
      'name',
      'description',
      'list_price',
      'image_1920',
      'categ_id',
      'qty_available',
      'default_code',
      'pipe_size',
      'suitable_for',
      'warranty_years',
    ]
  );

  return products.length > 0 ? products[0] : null;
}

export async function searchProducts(query: string): Promise<Product[]> {
  const client = getOdooClient();
  
  const domain = [
    ['sale_ok', '=', true],
    '|',
    ['name', 'ilike', query],
    ['description', 'ilike', query],
  ];

  return client.searchRead('product.product', domain);
}
```

### 3. Customer Operations

```typescript
// lib/odoo/customers.ts

import { getOdooClient } from './client';

export interface Customer {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  mobile?: string;
  street?: string;
  city?: string;
  state_id?: [number, string];
  zip?: string;
  country_id?: [number, string];
}

export async function createCustomer(customer: Customer): Promise<number> {
  const client = getOdooClient();
  
  return client.create('res.partner', {
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    mobile: customer.mobile,
    street: customer.street,
    city: customer.city,
    state_id: customer.state_id?.[0],
    zip: customer.zip,
    country_id: customer.country_id?.[0] || 104, // India default
    customer_rank: 1, // Mark as customer
  });
}

export async function getCustomerByEmail(email: string): Promise<Customer | null> {
  const client = getOdooClient();
  
  const partners = await client.searchRead(
    'res.partner',
    [['email', '=', email]],
    ['name', 'email', 'phone', 'mobile', 'street', 'city', 'state_id', 'zip', 'country_id']
  );

  return partners.length > 0 ? partners[0] : null;
}

export async function updateCustomer(id: number, data: Partial<Customer>): Promise<boolean> {
  const client = getOdooClient();
  
  return client.write('res.partner', [id], data);
}
```

### 4. Order Operations

```typescript
// lib/odoo/orders.ts

import { getOdooClient } from './client';

export interface OrderLine {
  product_id: number;
  product_uom_qty: number;
  price_unit: number;
}

export interface Order {
  id?: number;
  partner_id: number;
  order_line: OrderLine[];
  amount_total?: number;
  state?: string;
  name?: string;
}

export async function createOrder(order: Order): Promise<number> {
  const client = getOdooClient();
  
  // Format order lines for Odoo
  const orderLines = order.order_line.map(line => [
    0, 0, {
      product_id: line.product_id,
      product_uom_qty: line.product_uom_qty,
      price_unit: line.price_unit,
    }
  ]);

  return client.create('sale.order', {
    partner_id: order.partner_id,
    order_line: orderLines,
  });
}

export async function getOrder(id: number): Promise<Order | null> {
  const client = getOdooClient();
  
  const orders = await client.read(
    'sale.order',
    [id],
    ['partner_id', 'order_line', 'amount_total', 'state', 'name']
  );

  return orders.length > 0 ? orders[0] : null;
}

export async function getCustomerOrders(partnerId: number): Promise<Order[]> {
  const client = getOdooClient();
  
  return client.searchRead(
    'sale.order',
    [['partner_id', '=', partnerId]],
    ['name', 'date_order', 'amount_total', 'state'],
    { limit: 50, order: 'date_order desc' }
  );
}

export async function confirmOrder(id: number): Promise<boolean> {
  const client = getOdooClient();
  
  // Call action_confirm method on sale.order
  return client.execute('sale.order', 'action_confirm', [[id]]);
}
```

### 5. CRM Lead Operations

```typescript
// lib/odoo/crm.ts

import { getOdooClient } from './client';

export interface Lead {
  name: string;
  partner_name: string;
  email_from: string;
  phone: string;
  description?: string;
  type: 'lead' | 'opportunity';
  // E-SOFT specific
  application_type?: 'residential' | 'commercial' | 'industrial' | 'agriculture';
  property_size?: string;
  pipe_size?: string;
  water_hardness?: string;
}

export async function createLead(lead: Lead): Promise<number> {
  const client = getOdooClient();
  
  return client.create('crm.lead', {
    name: lead.name,
    partner_name: lead.partner_name,
    email_from: lead.email_from,
    phone: lead.phone,
    description: lead.description,
    type: lead.type,
    // Custom fields
    x_application_type: lead.application_type,
    x_property_size: lead.property_size,
    x_pipe_size: lead.pipe_size,
    x_water_hardness: lead.water_hardness,
  });
}

export async function convertLeadToOpportunity(leadId: number): Promise<boolean> {
  const client = getOdooClient();
  
  return client.execute('crm.lead', 'convert_opportunity', [[leadId]]);
}
```

---

## 🎨 SHOP PAGE COMPONENTS

### Product Card Component

```typescript
// components/shop/product-card.tsx

import { ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image?: string;
  category: string;
  suitableFor?: string;
  canBuyOnline: boolean;
}

export function ProductCard({
  id,
  name,
  price,
  image,
  category,
  suitableFor,
  canBuyOnline,
}: ProductCardProps) {
  return (
    <div className="group relative rounded-2xl border-2 border-slate-200 bg-white p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
      {/* Product Image */}
      <div className="relative aspect-square mb-4 bg-slate-100 rounded-xl overflow-hidden">
        {image ? (
          <Image
            src={`data:image/png;base64,${image}`}
            alt={name}
            fill
            className="object-contain p-4"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            🎛️
          </div>
        )}
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
          {category}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-slate-900">{name}</h3>
        
        {suitableFor && (
          <p className="text-sm text-slate-600">
            Suitable for: {suitableFor}
          </p>
        )}

        <div className="flex items-end justify-between">
          <div>
            <p className="text-3xl font-bold text-blue-600">
              ₹{price.toLocaleString()}
            </p>
            <p className="text-xs text-slate-500">One-time cost</p>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 space-y-2">
          {canBuyOnline ? (
            <>
              <Button asChild className="w-full">
                <Link href={`/shop/product/${id}`}>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy Now
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/shop/product/${id}`}>
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </>
          ) : (
            <>
              <p className="text-sm text-slate-600 text-center mb-2">
                Starting from ₹{price.toLocaleString()}
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/shop/product/${id}`}>
                  Request Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
```

### Shopping Cart

```typescript
// app/shop/cart/page.tsx

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";
import Link from "next/link";

interface CartItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Load cart from localStorage
    const saved = localStorage.getItem('cart');
    if (saved) {
      setCartItems(JSON.parse(saved));
    }
  }, []);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items => {
      const updated = items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  const removeItem = (id: number) => {
    setCartItems(items => {
      const updated = items.filter(item => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const gst = subtotal * 0.18; // 18% GST
  const total = subtotal + gst;

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen py-20">
        <div className="mx-auto max-w-2xl px-4 text-center space-y-6">
          <div className="text-8xl">🛒</div>
          <h1 className="text-4xl font-bold text-slate-900">Your Cart is Empty</h1>
          <p className="text-xl text-slate-600">
            Add some E-SOFT products to get started
          </p>
          <Button asChild size="lg">
            <Link href="/shop">Browse Products</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white rounded-2xl p-6 flex gap-6 border-2 border-slate-200">
                {/* Product Image */}
                <div className="w-24 h-24 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  🎛️
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-2xl font-bold text-blue-600">₹{item.price.toLocaleString()}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-end gap-4">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-3 border-2 border-slate-200 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-2 hover:bg-slate-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-2 hover:bg-slate-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 sticky top-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>GST (18%)</span>
                  <span>₹{gst.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-semibold">FREE</span>
                </div>
                <div className="border-t-2 border-slate-200 pt-4">
                  <div className="flex justify-between text-2xl font-bold text-slate-900">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="w-full mb-4">
                <Link href="/shop/checkout">
                  Proceed to Checkout
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="w-full">
                <Link href="/shop">
                  Continue Shopping
                </Link>
              </Button>

              <div className="mt-6 space-y-2 text-sm text-slate-600">
                <p className="flex items-center gap-2">
                  ✓ 30-day money-back guarantee
                </p>
                <p className="flex items-center gap-2">
                  ✓ Free professional installation
                </p>
                <p className="flex items-center gap-2">
                  ✓ 30-year warranty included
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
```

---

## 📦 PRODUCT MODELS IN ODOO

### Product Categories to Create in Odoo

1. **E-SOFT Residential**
2. **E-SOFT Commercial**
3. **E-SOFT Industrial**
4. **E-SOFT Agriculture**
5. **E-SOFT Accessories**
6. **E-SOFT Services**

### Custom Fields to Add to product.product

```python
# In Odoo (Python)

# Add custom fields to product.product
pipe_size = fields.Char(string="Pipe Size")
suitable_for = fields.Char(string="Suitable For")
warranty_years = fields.Integer(string="Warranty (Years)", default=30)
can_buy_online = fields.Boolean(string="Can Buy Online", default=False)
application_type = fields.Selection([
    ('residential', 'Residential'),
    ('commercial', 'Commercial'),
    ('industrial', 'Industrial'),
    ('agriculture', 'Agriculture'),
], string="Application Type")
```

---

## 💳 PAYMENT INTEGRATION

### Razorpay Integration (India's top payment gateway)

```typescript
// lib/payment/razorpay.ts

export async function createRazorpayOrder(amount: number, orderId: string) {
  const response = await fetch('/api/payment/razorpay/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount, orderId }),
  });

  return response.json();
}

export function initializeRazorpay(options: any) {
  const rzp = new (window as any).Razorpay(options);
  rzp.open();
}
```

```typescript
// app/api/payment/razorpay/create/route.ts

import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
  const { amount, orderId } = await request.json();

  const options = {
    amount: amount * 100, // Convert to paise
    currency: 'INR',
    receipt: orderId,
  };

  try {
    const order = await razorpay.orders.create(options);
    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json({ error: 'Payment creation failed' }, { status: 500 });
  }
}
```

---

## 📊 IMPLEMENTATION CHECKLIST

### Phase 1: Product Setup (Week 1)
- [ ] Create product categories in Odoo
- [ ] Add custom fields to products
- [ ] Add 4 residential products with images & specs
- [ ] Add commercial/industrial product templates
- [ ] Add accessories (coils, kits, services)
- [ ] Set prices and stock levels

### Phase 2: API Integration (Week 2)
- [ ] Install odoo-xmlrpc npm package
- [ ] Create Odoo client wrapper
- [ ] Implement product API routes
- [ ] Implement customer API routes
- [ ] Implement order API routes
- [ ] Implement CRM lead routes
- [ ] Test all API endpoints

### Phase 3: Frontend Shop (Week 3)
- [ ] Create shop homepage
- [ ] Create category pages
- [ ] Create product detail pages
- [ ] Implement product search
- [ ] Create shopping cart
- [ ] Add to cart functionality
- [ ] Cart management (add/remove/update)

### Phase 4: Checkout & Payment (Week 4)
- [ ] Create checkout page
- [ ] Customer registration/login
- [ ] Address collection
- [ ] Payment gateway integration (Razorpay)
- [ ] Order confirmation
- [ ] Email notifications
- [ ] SMS notifications (optional)

### Phase 5: Order Management (Week 5)
- [ ] Customer dashboard
- [ ] Order history page
- [ ] Order tracking page
- [ ] Invoice download
- [ ] Installation scheduling
- [ ] Review & rating system

---

## 🎯 SUCCESS METRICS

### E-Commerce KPIs
- **Conversion Rate**: Target 3-5%
- **Average Order Value**: ₹45,000+
- **Cart Abandonment**: <60%
- **Time to Purchase**: <10 minutes
- **Customer Satisfaction**: 4.5+ stars

### Odoo Integration KPIs
- **API Response Time**: <500ms
- **Order Sync Success**: 99%+
- **Inventory Accuracy**: 100%
- **Payment Success Rate**: 95%+

---

*This complete e-commerce system integrates seamlessly with your Odoo CRM, allowing customers to browse and buy online while all data flows directly into your existing business system.*
