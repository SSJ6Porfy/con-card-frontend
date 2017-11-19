# eContribution Card

## About

eContribution Card is an app designed to help grassroots politcal campaigns organized their constituent's contributions with a simple form interface.  Volunteers using the app will then have the ability to export a csv file which they can send to the campaign's financial reporting team.

Get RID of the PAPER!   

## Technologies

* Ruby on Rails
* Action Mailer
* React Native
* PostgreSQL

## Database Schema

### Users
    Column Name     | Data Type | Details    |
    ----------------|-----------|------------|
    Id              | Integer   | Null: False, Primary Key
    Username        | String    | Null: False
    Email           | String    | Null: False
    Password_Digest | String    | Null: False
    Session_token   | String    | Null: False, Unique: True, Indexed
    TimeStamps      | Datetime  | Null: False

### Contributions
    Column Name      | Data Type | Details    |
    -----------------|-----------|------------|
    First Name       | String    | Null: False
    Last Name        | String    | Null: False
    Street           | String    |
    City / Town      | String    | 
    State            | String    |
    Zip Code         | String    |
    Email            | String    |
    Phone Number     | String    |
    Amount           | Integer   | Null: False
    Contribution Type| String    | Null: False
    Event Id         | Integer   | Null: False
    Date             | Datetime  | Null: False
    TimeStamps       | Datetime  | Null: False

### Events
    Column Name | Data Type | Details    |
    ------------|-----------|------------|
    Name        | String    | Null: False
    User Id     | Integer   | Null: False
    Campaign Id | Integer   | Null: False
    Venue       | String    |
    City        | String    |
    State       | String    |
    TimeStamps  | Datetime  | Null: False

### Campaign
    Column Name | Data Type | Details    |
    ------------|-----------|------------|
    Name        | String    | Null: False
    User Id     | Integer   | Null: False
    TimeStamps  | Datetime  | Null: False