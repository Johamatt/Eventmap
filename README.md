# EventMap Mobile App

EventMap is a mobile app that allows users to discover and interact with events in their area (Helsinki metropolitan area). It's built using React Native, Expo, and AWS Amplify for backend services.

**Warning:** Installation guide does not include all required steps, updating later.

## Getting Started

To get started with the project, follow the instructions below. 

### Prerequisites

Before you begin, make sure you have the following:

- Node.js and npm: Make sure you have Node.js and npm installed on your machine.

- AWS account (Initializing Amplify backend)
- Google Cloud Account (OAuth 2.0 client)
- MapBox Account (MapBox token)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/eventmap.git
   cd eventmap

2. install dependencies:

   ```bash
   npm install

3. Initialize amplify project:

   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   amplify init
   ```
   
4. Add amplify GraphQL api

  ```bash
  amplify add api
  ```

5. Replace GraphQL schema file

 ```bash
   Replace schema.graphql file in EventMap/amplify/backend/api/ generated by amplify cli with following file: [schema.graphql](https://github.com/Johamatt/EventMap/blob/main/schema2.graphql)
```

6. Push changes to Amplify

  ```bash
  amplify amplify push
  ```


   
