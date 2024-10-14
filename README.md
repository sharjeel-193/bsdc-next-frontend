# BSDC - Bright Smile Dental Clinic

A modern and responsive website for Bright Smile Dental Clinic, built using Next.js, Material UI (MUI), and Sanity CMS. This website provides users with information about the clinic, its services, and blogs related to dental care, providing an optimal experience across all devices.

[Live Demo](https://bsdc-next-frontend.vercel.app/)

The backend repository for this project can be found [here](https://github.com/sharjeel-193/bsdc-sanity-backend).

## Features

* **Responsive Design**: Optimized for both desktop and mobile devices.
* **Dynamic Content Management**: Sanity CMS integration allows easy updates to content without redeploying the site.
* **Modern UI**: Built with MUI for a sleek, professional interface.
* **Service Carousel**: Smooth service showcase with React Slick integration.

## Getting Started

### Prerequisites

To run this project locally, you'll need:

    Node.js (v14 or later)
    npm or yarn

### Installation

**Step 1: Clone the Repository**

```bash

git clone https://github.com/yourusername/bsdc-next-frontend.git
cd bsdc-next-frontend

```

**Step 2: Install Dependencies**

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

**Step 3: Environment Variables**

Create a .env.local file in the root directory and add your Sanity project details and other required environment variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset
NEXT_PUBLIC_SANITY_TOKEN=token_to_access_dataset
```

Obtain these values from your Sanity project dashboard.

**Step 4: Running the App**

To start the development server, run:

```bash
npm run dev
```

or

```bash
yarn dev
```

Visit http://localhost:3000 in your browser to view the site.

**Step 5: Deployment**

This project is deployed using Vercel. To deploy your own version:

* Link your GitHub repository to Vercel.
* Configure the environment variables in Vercel’s project settings as described above.
* Trigger a deploy from the Vercel dashboard or push your changes to the master branch.

The live website is available at:

```bash
https://bsdc-next-frontend.vercel.app/
```

### Usage

* View detailed descriptions of dental services offered.
* Browse through the blogs written by dental expterts.
* Use Sanity CMS to update service details, staff info, and more.

### Technologies Used

* **Next JS**: React framework for server-side rendering and static site generation.
* **MUI**: Material UI for implementing modern design.
* **Sanity**: Headless CMS for dynamic content management.
* **React Slick**: Used for light weight carousel features.
* **Moment.js**: Library for date formatting and manipulation.

License

This project is licensed under the MIT License. See the LICENSE file for more details.

For any inquiries or issues, please contact: m.sharjeel193@gmail.com
