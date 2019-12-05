# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true, dependent: true|
|user_name|string|null: false, unique: true, foreign_key: true|
|password|variant|null: false, unique: true, dependent: true|
|mail|variant|null: false, unique: true, dependent: true|

### Association
- has_many :groups, through: :users_groups
- belongs_to :messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true, dependent: true|
|group_name|string|null: false, foreign_key: true, dependent: true|
|message_id|integer|null: false, foreign_key: true, dependent: true|
### Association
- has_many :massages, through: :users_groups
- belongs_to :messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|time|date|null: false, dependent: true|
|massage|string|null: false, dependent: true|
|image|variant|dependent: true|
- belongs_to :user
- belongs_to :groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :users
- belongs_to :groups