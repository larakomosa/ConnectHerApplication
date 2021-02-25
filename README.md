# ConnectHER

## Description

_Duration: 2 Week Sprint_

InnovateHER KC, a nonprofit in Kansas City, MO committed to supporting all womxn, promoting diversity, and advancing its member’s professional goals—came to Prime Digital Academy with a challenge.

Their online presence began on Facebook and has grown to 3,000+ members. As the community has grown, so have its needs. For example, while the group was smaller and the FB Page had less activity, sifting through previous posts for like-minded people and resources wasn’t as inconvenient as it is now. Today, the page is so active that finding a post from an hour ago is a challenge.

In summary, the ask was to conveniently organize InnovateHER’s resources for member’s easy access and provide a more targeted way of connecting with similar and/or complementary individuals.

Out of this request, ConnectHER, a social networking application tailored to InnovateHER, emerged. It promotes inclusive interaction while also aligning specific members based on similarities, gathers analytics in a straightforward manner allowing newfound knowledge to better the user experience, and ultimately, makes community resources more easily accessible.

To see the fully functional site, please visit: [ConnectHER](https://ancient-woodland-73195.herokuapp.com/)

## Screen Shots

![image](https://user-images.githubusercontent.com/67838283/105495266-96794a80-5c81-11eb-8d8a-5b5776aa6713.png)
![image](https://user-images.githubusercontent.com/67838283/105497100-0983c080-5c84-11eb-9a90-7b8509ee8afe.png)

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

## Installation

This version of the project uses Docker to run the development environment. If you haven’t installed [docker](https://www.docker.com/), do so now.

1. Clone this repo to your local machine.
2. Open the project in the editor of your choice, we use [VS Code](https://code.visualstudio.com/) and run `npm install`.
3. In order to access specific functions and API’s you will need to configure a `.env` file. Please see detailed instructions below.\*
4. From the project root directory: `docker-compose up --build`
5. The development database should populate with the data stored in the `init.sql` and `data.sql` files.\*\*
6. Once the development server has started it should serve a message to indicate the server started successfully.
7. In a browser, go to `http://localhost:3000`. You should see the application running.
8. There are user profiles created in the `data.sql` so you may login as one of them or create your own.

### Detailed Instructions for Configuring the .env (Secure Development)

1. Database name as `DATABASE_NAME`.
2. Server session secret: `SERVER_SESSION_SECRET` and this can be equal to a secure password. For help creating a password: [Password Generator](https://passwordsgenerator.net/).
   1. In order for the development profiles to work: `SERVER_SESSION_SECRET = w0nd3rW@ll!Ye@h`.
3. The Docker database setup is handled in 3 configs: `DOCKER_DB_PORT=5432` (defaulted config), `DOCKER_DB_USER` (set to your configuration for secure dev), and `DOCKER_DB_PASS`.
4. A `NODE_ENV` can be set to ‘development’.
5. Airtables API can be accessed at [Airtable](https://airtable.com/). The API Key will be configured as `AIRTABLE_API_KEY` and will also require the BASE key as `BASE`.
6. For AWS S3, configure the `.env` with your account and API Access Key: `AWS_ACCESS_KEY_ID` and your Secret Key as `AWS_SECRET_ACCESS_KEY`.
7. Email masking functionality is handled by Nodemailer. This sends secure emails from an account to keep users hidden until choosing to share their contact information. This can be configured in the `.env` file with `NODEMAILER_USERNAME` and `NODEMAILER_PASSWORD`.

\*\*The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.

## Usage

Steps:

Note: For testing purposes, test accounts and data are currently initialized with the project upon build. These lines can be removed and are not entirely necessary, but may prove helpful as a tool to show off the application

1. Register and/or login to the application. If you’re creating a new account, first select a membership plan and you’re directed to the ‘Step 1 - User Information’ tab. Complete the forms on tabs 1-4 by providing the necessary information, and click ‘Submit.’

2. After logging into your account, you see the Landing Page. Note, you can also reach this page by selecting ‘Home’ in the top nav bar.

The Landing Page contains four links for "Community", "Speakers", "Work Spaces", and "Businesses". Clicking `Learn More` associated with each title will take you to that page. You can also view and edit your profile information by selecting ‘Profile’ in the top nav bar.

3. To search through the community of members, select the ‘Community’ button from the landing page or the nav bar. After navigating to the Search Page, you can find members by inputting a job title, community role, organization name, display name, or mentor/mentee. You have the option to search by skills by clicking `Add` in the skills bar. This will prompt a modal with all the skills in categories. Clicking on a skill will insert that skill into the search filter. When the search results appear, clicking the `Learn More` button a modal will pop up with the users profile information.

4. On each the members of the community, speakers, businesses, and spaces, there is a a heart icon that can be clicked to favorite the location/member, this will save them to the favorites/chat component located in the bottom right corner of the viewport with the heart icon. each are grouped into their respective categories.The Chat Feature is located within the same component as the Favorites and can be accessed by clicked the chat image right above the favorites, this is display all active chat instances. to begin a chat a user must have another user favorited, and click on them in the favorites menu. A drop down will appear with the option to either delete the favorite or message them.

5. Selecting `Speakers` `Work Spaces`, or `Businesses` from the Landing Page, you can view a list speakers, local businesses, , and/or spaces to hold events. Selecting the `Learn More` button opens a modal, and you can view additional information including contact info for the individual or entity.

6. An admin has access to the admin page, which is accessible by clicking `Admin` in the nav bar. On the admin page there will be charts of demographic information from all the users. You can change graphs by clicking the arrows next to the chart title. Next is a total member count registered, as well as the number of members associated with each membership plan. You can view a full list of members with their associated membership level by clicking `Member Levels`. Admins can search all the members by name and skills, outlined in step 3. On the search results clicking `Edit` will initiate a modal with that users information all in editable fields, as well as the ability to change the users access level and member level, selecting `Save` will save the changes made.

User Story:

The following snippet illustrates how a user will utilize and navigate through the ConnectHER application. (0:00 - 5:42).

[Presentation](https://vimeo.com/460774354)

## Built With

- React
- React-redux
- Redux-saga
- Formik
- Moment.js
- Node.js
- Express
- Typescript
- Airtable API
- Amazon S3 API
- PostgreSQL
- Docker
- Heroku

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped us to make this application a reality.
A special thank you to Lauren Conaway and the InnovateHER KC team for giving us this opportunity.
Thank you to the ConnectHER team for all the hard-work and support: [Alex Calvillo](www.github.com/alexjcalvillo), [Kevin Anderson](https://github.com/kevinanderson7), [Ashleigh McGinnis](https://github.com/ashmcg21), and [Shelby Cook](https://github.com/shelbyecook)
# ConnectHerApplication
