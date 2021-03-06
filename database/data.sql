-- Add users
INSERT INTO "users" (email, password, first_name, last_name, access_level)
VALUES ('crosbycalvillo@gmail.com', '$2a$10$0mPSXOrr5aXmFxj4bWhEdO9vQPg.WHlCzu8IdooZjr40r9e9hv.d6', 'Crosby', 'Calvillo', 1),
('sarahmiller@gmail.com', '$2a$10$0mPSXOrr5aXmFxj4bWhEdO9vQPg.WHlCzu8IdooZjr40r9e9hv.d6', 'Sarah', 'Miller', 1),
('briannahamption@gmail.com', '$2a$10$0mPSXOrr5aXmFxj4bWhEdO9vQPg.WHlCzu8IdooZjr40r9e9hv.d6', 'Brianna', 'Hampton', 1),
('kristinjones@gmail.com', '$2a$10$0mPSXOrr5aXmFxj4bWhEdO9vQPg.WHlCzu8IdooZjr40r9e9hv.d6', 'Kristin', 'Jones', 1),
('annasmith@gmail.com', '$2a$10$0mPSXOrr5aXmFxj4bWhEdO9vQPg.WHlCzu8IdooZjr40r9e9hv.d6', 'Anna', 'Smith', 2),
('ginabirdling@gmail.com', '$2a$10$0mPSXOrr5aXmFxj4bWhEdO9vQPg.WHlCzu8IdooZjr40r9e9hv.d6', 'Gina', 'Birdling', 1),
('sophiajean@gmail.com', '$2a$10$0mPSXOrr5aXmFxj4bWhEdO9vQPg.WHlCzu8IdooZjr40r9e9hv.d6', 'Sophia', 'Jean', 2),
('bellakreig@gmail.com', '$2a$10$0mPSXOrr5aXmFxj4bWhEdO9vQPg.WHlCzu8IdooZjr40r9e9hv.d6', 'Bella', 'Kreig', 1);


-- Add Profiles
INSERT INTO "about" 
(display_name, community_role, organization_name, job_title, 
address, city, state, zip_code, linkedin, facebook, twitter, 
instagram, headshot, bio, tshirt_size, birthday, 
mentor, mentee, user_id) 
VALUES
('Crosby Calvillo', 'Occupational Therapist', 'Advent Health', 'Acute Care OT',
'5315 Haskell Ave', 'Kansas City', 'KS', 66104, 'linkedin.link',
'facebook.link', 'twitter.link', 'instagram.link', 'https://innovateher.s3.us-east-2.amazonaws.com/10d8f542-cc89-4dba-9df2-27e557a846df_IMG_0984.jpg',
'My name is Crosby and I enjoy helping people live their lives to the fullest.', 
'M', '04/18/1995', true, false, 1), 
('Sarah Miller', 'Elementary Teacher', 'Whispering Meadows Elementary', 
'Elementary Music Teacher', '5174 Anderson Dr.', 'Lees Summit', 'MO', 
'64134', 'linkedin.link', 'facebook.link', 'twitter.link', 'instagram.link', 
'https://innovateher.s3.us-east-2.amazonaws.com/linkedin-sales-navigator-QgYvORVDdd8-unsplash.jpg', 
'As a teacher, I love helping shape our future through my students!', 
'M', '07/13/1989', true, true, 2),
('Brianna Hampton', 'Registered Nurse', 'St. James Hospital', 'ICU RN', 
'9987 Wyandotte Rd.', 'Kansas City', 'MO', 64193, 
'https://www.linkedin.com', 'https://www.facebook.com', 'https://www.twitter.com', 
'https://www.instagram.com', 'https://innovateher.s3.us-east-2.amazonaws.com/Sample3.jpeg', 
'Hi! I am Brianna, a new RN, looking to meet likeminded individuals and get more involved in the community.', 
'M', '02/17/1994', true, true, 3),
('Kristin Jones', 'Secretary', 'Brock and Dunham Law', 'Paralegal Secretary', '8934 Valley Dr.', 
'Blue Springs', 'MO', 60933, 'https://www.linkedin.com', 'https://www.facebook.com', 
'https://www.twitter.com', 'https://www.instagram.com', 
'https://innovateher.s3.us-east-2.amazonaws.com/Sample2.jpeg', 
'Law is my passion.', 'S', '12/04/1992', false, false, 4),
('Anna Smith', 'Social Media Enthusiast', 'Axios Media', 'Social Media Coordinator', '2525 W 64th St', 
'Kansas City', 'KS', 66108, 'https://www.linkedin.com', 'https://www.facebook.com', 
'https://www.twitter.com', 'https://www.instagram.com', 
'https://innovateher.s3.amazonaws.com/7d96db04-83c4-4ab7-a16d-33a83e1b5803_michael-dam-mEZ3PoFGs_k-unsplash.jpg', 
'I am the new girl in town and I am looking to find my community and place!', 'S', '02/17/1999', true, false, 5),
('Gina Birdling', 'Photographer', 'Ginas Photography', 'Photographer',
'167 Jackson Ave', 'Kansas City', 'MO', 64108, 'https://www.linkedin.com',
'https://www.facebook.com', 'https://www.twitter.com', 'https://www.instagram.com', 'https://innovateher.s3.amazonaws.com/1eab1c72-64c8-4de0-bc0c-dbdbcd21f7b2_courtney-cook-TSZo17r3m0s-unsplash.jpg',
'I am a photographer from KC who loves working with families and other women in the community!', 
'M', '07/13/1989', true, false, 6),
('Sophia Jean', 'Public Servant', 'Independence Police Department', 'Police Patrol Officer',
'1675  Davis Place', 'Kansas City', 'MO', 64106, 'https://www.linkedin.com',
'https://www.facebook.com', 'https://www.twitter.com', 'https://www.instagram.com', 'https://innovateher.s3.us-east-2.amazonaws.com/ansley-ventura---SIXoW9s9A-unsplash.jpg',
'Creator. Hardcore music fanatic. Food buff. Zombie expert. Unapologetic reader. Travel practitioner.', 
'M', '12/10/1981', true, false, 7),
('Bella Kreig', 'Event Photographer', 'Bella Photography', 'Photographer',
'278 Nutter Street', 'Kansas City', 'MO', 64106, 'linkedin.link',
'facebook.link', 'twitter.link', 'instagram.link', 'https://innovateher.s3.us-east-2.amazonaws.com/eye-for-ebony-vYpbBtkDhNE-unsplash.jpg',
'I enjoy meeting people and taking their pictures. Never be afraid of who you are!', 
'M', '12/18/1990', false, true, 8);

INSERT INTO "users_skills" (user_id, skill_id) 
VALUES (1, 357), (1, 388), (1, 389), (1, 300), (1, 381),
      (2, 23), (2, 245), (2, 23), (2, 9), (2, 98),
      (3, 2), (3, 43), (3, 520), (3, 345), (3, 22),
      (4, 23), (4, 245), (4, 23), (4, 9), (4, 98),
      (5, 112), (5, 111), (5, 116), (5, 117), (5, 120),
      (5, 121), (5, 123), (5, 124), (5, 182), (5, 181),
      (5, 176), (5, 177), (5, 434), (5, 435), (5, 441),
      (5, 579), (5, 581), (6, 494), (6, 544), (6, 532), 
      (6, 520), (6, 512), (6, 511), (6, 488), (6, 489), 
      (6, 589), (7, 3), (7, 9), (7, 15), (7, 391),
      (7, 398), (7, 414), (7, 415), (7, 436), (7, 87),
      (8, 494), (8, 544), (8, 532), 
      (8, 520), (8, 512), (8, 511), (8, 488),(4, 327), (8, 489);

INSERT INTO "demographic" (age, ethnicity, gender, sexual_orientation, ability, income, education, user_id)
VALUES ('18-24', 'Multiracial', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Some College', 1),
('18-24', 'American Indian or other Native American', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I have a disability', '40000-79999', 'Some College', 2),
('18-24', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I have a disability', '40000-79999', 'Some College', 3),
('18-24', 'Puerto Rican', 'Female / Female-Identifying', 'I prefer not to answer', 'I have a disability', '<40000', 'Bachelor Degree', 4),
('18-24', 'Multiracial', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '>120,000', 'Bachelor Degree', 5),
('25-34', 'Mexican or Mexican American', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 6),
('25-34', 'Other Hispanic or Latinx', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Doctoral Degree', 7),
('25-34', 'Asian, Asian American, or Pacific Islander', 'Non-Binary', 'Straight / Heterosexual', 'I do not have a disability', '>120,000', 'Master Degree', 8),
('25-34', 'American Indian or other Native American', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '80000-119999', 'Master Degree', 1),
('35-44', 'Puerto Rican', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Some College', 2),
('35-44', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Some College', 3),
('35-44', 'Puerto Rican', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Some College', 4),
('45-54', 'Multiracial', 'Non-Binary', 'Female / Female-Identifying', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 5),
('35-44', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 6),
('35-44', 'Other', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I prefer not to answer', '40000-79999', 'Associate Degree', 7),
('45-54', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I prefer not to answer', '40000-79999', 'High School diploma or GED', 8),
('45-54', 'White (non-Hispanic)', 'Female / Female-Identifying', 'LGBTQIA+', 'I prefer not to answer', '40000-79999', 'Less than high school', 1),
 ('45-54', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 2),
 ('45-54', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '<40000', 'Some College', 3),
 ('55-64', 'Multiracial', 'Non-Binary', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 4),
  ('55-64', 'Multiracial', 'Non-Binary', 'Straight / Heterosexual', 'I do not have a disability', '<40000', 'Bachelor Degree', 5),
  ('55-64', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 6),
  ('55-64', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Some College', 7),
   ('65-74', 'Puerto Rican', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 8), ('18-24', 'Multiracial', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Some College', 1),
('18-24', 'American Indian or other Native American', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I have a disability', '40000-79999', 'Some College', 2),
('18-24', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I have a disability', '40000-79999', 'Some College', 3),
('18-24', 'Puerto Rican', 'Female / Female-Identifying', 'I prefer not to answer', 'I have a disability', '<40000', 'Bachelor Degree', 4),
('18-24', 'Multiracial', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '>120,000', 'Bachelor Degree', 5),
('25-34', 'Mexican or Mexican American', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 6),
('25-34', 'Other Hispanic or Latinx', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Doctoral Degree', 7),
('25-34', 'Asian, Asian American, or Pacific Islander', 'Non-Binary', 'Straight / Heterosexual', 'I do not have a disability', '>120,000', 'Master Degree', 8),
('25-34', 'American Indian or other Native American', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '80000-119999', 'Master Degree', 1),
('35-44', 'Puerto Rican', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Some College', 2),
('35-44', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Some College', 3),
('35-44', 'Puerto Rican', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Some College', 4),
('45-54', 'Multiracial', 'Non-Binary', 'Female / Female-Identifying', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 5),
('35-44', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 6),
('35-44', 'Other', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I prefer not to answer', '40000-79999', 'Associate Degree', 7),
('45-54', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I prefer not to answer', '40000-79999', 'High School diploma or GED', 8),
('45-54', 'White (non-Hispanic)', 'Female / Female-Identifying', 'LGBTQIA+', 'I prefer not to answer', '40000-79999', 'Less than high school', 1),
 ('45-54', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 2),
 ('45-54', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '<40000', 'Some College', 3),
 ('55-64', 'Multiracial', 'Non-Binary', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 4),
  ('55-64', 'Multiracial', 'Non-Binary', 'Straight / Heterosexual', 'I do not have a disability', '<40000', 'Bachelor Degree', 5),
  ('55-64', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 6),
  ('55-64', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Some College', 7),
   ('65-74', 'Puerto Rican', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 8), ('18-24', 'Multiracial', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Some College', 1),
('18-24', 'American Indian or other Native American', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I have a disability', '40000-79999', 'Some College', 2),
('18-24', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I have a disability', '40000-79999', 'Some College', 3),
('18-24', 'Puerto Rican', 'Female / Female-Identifying', 'I prefer not to answer', 'I have a disability', '<40000', 'Bachelor Degree', 4),
('18-24', 'Multiracial', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '>120,000', 'Bachelor Degree', 5),
('25-34', 'Mexican or Mexican American', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 6),
('25-34', 'Other Hispanic or Latinx', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Doctoral Degree', 7),
('25-34', 'Asian, Asian American, or Pacific Islander', 'Non-Binary', 'Straight / Heterosexual', 'I do not have a disability', '>120,000', 'Master Degree', 8),
('25-34', 'American Indian or other Native American', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '80000-119999', 'Master Degree', 1),
('35-44', 'Puerto Rican', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Some College', 2),
('35-44', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Some College', 3),
('35-44', 'Puerto Rican', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Some College', 4),
('45-54', 'Multiracial', 'Non-Binary', 'Female / Female-Identifying', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 5),
('35-44', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 6),
('35-44', 'Other', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I prefer not to answer', '40000-79999', 'Associate Degree', 7),
('45-54', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I prefer not to answer', '40000-79999', 'High School diploma or GED', 8),
('45-54', 'White (non-Hispanic)', 'Female / Female-Identifying', 'LGBTQIA+', 'I prefer not to answer', '40000-79999', 'Less than high school', 1),
 ('45-54', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 2),
 ('45-54', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '<40000', 'Some College', 3),
 ('55-64', 'Multiracial', 'Non-Binary', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 4),
  ('55-64', 'Multiracial', 'Non-Binary', 'Straight / Heterosexual', 'I do not have a disability', '<40000', 'Bachelor Degree', 5),
  ('55-64', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 6),
  ('55-64', 'White (non-Hispanic)', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Some College', 7),
   ('65-74', 'Puerto Rican', 'Female / Female-Identifying', 'Straight / Heterosexual', 'I do not have a disability', '40000-79999', 'Bachelor Degree', 8);

INSERT INTO "member" (user_id, member_level) 
VALUES (1, 2), (2,3), (3,3),(4,1),(5,3),(6,3), (7,2), (8,1);

INSERT INTO "industry" ("name")
VALUES 
('Accounting'),
('Airlines/Aviation'),
('Alternative Dispute Resolution'),
('Altervative Medicine'),
('Animation'),
('Apparel & Fashion'),
('Architecture & Planning'),
('Arts and Crafts'),
('Automotive'),
('Aviation & Aerospace'),
('Banking'),
('Biotechnology'),
('Broadcast Media'),
('Building Materials'),
('Business Supplies and Equipment'),
('Capital Markets'),
('Chemicals'),
('Civic & Social Organization'),
('Civil Engineering'),
('Commercial Real Estate'),
('Computer & Network Security'),
('Computer Games'),
('Computer Hardware'),
('Computer Networking'),
('Computer Software'),
('Construction'),
('Consumer Electronics'),
('Consumer Goods'),
('Consumer Services'),
('Cosmetics'),
('Dairy'),
('Defense & Space'),
('Design'),
('Education Management'),
('E-Learning'),
('Electrical/Electronic Manufacturing'),
('Entertainment'),
('Environmental Services'),
('Events Services'),
('Facilities Services'),
('Farming'),
('Financial Services'),
('Fine Art'),
('Fishery'),
('Food & Beverages'),
('Food Production'),
('Fund-Raising'),
('Furniture'),
('Gambling & Casinos'),
('Glass, Ceramics & Concrete'),
('Government Administration'),
('Government Relations'),
('Graphic Design'),
('Health, Wellness and Fitness'),
('Higher Education'),
('Hospital & HealthCare'),
('Hospitality'),
('Human Resources'),
('Import and Export'),
('Individual & Family Services'),
('Industrial Automation'),
('Information Services'),
('Information Technoloy and Services'),
('Insurance'),
('International Affairs'),
('Internation Trade and Development'),
('Internet'),
('Investment Banking'),
('Investment Management'),
('Judiciary'),
('Law Enforcement'),
('Law Practice'),
('Legal Services'),
('Legislative Office'),
('Leisure, Tracel & Tourism'),
('Libraries'),
('Logistrics and Supply Chain'),
('Luxary Goods & Jewelry'),
('Machinery'),
('Management Consulting'),
('Maritime'),
('Market Research'),
('Marketing and Advertising'),
('Mechanical or Industrial Engineering'),
('Media Production'),
('Medical Devices'),
('Medical Practice'),
('Mental Health Care'),
('Military'),
('Mining & Metals'),
('Motion Pictures and Film'),
('Museums and Institutions'),
('Music'),
('Nanotechnoloy'),
('Newpapers'),
('Non-Profit Organziation Management'),
('Oil & Energy'),
('Online Media'),
('Outsourcing/Offshoring'),
('Package/Freight Delivery'),
('Packaging and Containers'),
('Paper & Forest Products'),
('Performing Arts'),
('Pharmaceuticals'),
('Philanthrophy'),
('Photography'),
('Plastics'),
('Political Organization'),
('Primary/Secondary Education'),
('Printing'),
('Professional Training & Coaching'),
('Program Development'),
('Public Policy'),
('Publi Relations and Communications'),
('Public Safety'),
('Publishing'),
('Railroad Manufacture'),
('Ranching'),
('Real Estate'),
('Recreational Facilities and Services'),
('Religious Institutions'),
('Renewables & Enviroment'),
('Research'),
('Restaurants'),
('Retail'),
('Security and Investiagations'),
('Semiconductors'),
('Shipbuilding'),
('Sporting Goods'),
('Sports'),
('Staffing and Recruiting'),
('Supermarkets'),
('Telecommunications'),
('Textiles'),
('Think Tanks'),
('Tobacco'),
('Translation and Localization'),
('Transportation/Trucking/Railroad'),
('Utilities'),
('Venture Capital & Private Equity'),
('Veterinary'),
('Warehousing'),
('Wholesale'),
('Wine and Spirits'),
('Wireless'),
('Writing and Editing');




INSERT INTO "careerLevel" ("name")
VALUES 
('Early stage - first 5 years in the workforce'),
('Mid stage - 5-15 years in the workforce'),
('Having a career break'),
('Looking for employment'),
('In education'),
('Re-educating'),
('Re-entry - returning to work after a career break'),
('Part-time'),
('Full time'),
('Contractor'),
('Mature stage - more than 15 years in the workforce');