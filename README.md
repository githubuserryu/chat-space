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
|user_id|integer|null: false, foreign_key: true, dependent: true|
|user|string|null: false, unique: true, foreign_key: true|
|password|variant|null: false, unique: true, dependent: true|
|mail|variant|null: false, unique: true, dependent: true|

### Association
- belongs_to :groups
- belongs_to :messages
- belongs_to :images

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true, dependent: true|
|group|string|null: false, foreign_key: true, dependent: true|
|user_id|integer|null: false, foreign_key: true, dependent: true|
|image_id|integer|null: false, foreign_key: true, dependent: true|
|message_id|integer|null: false, foreign_key: true, dependent: true|
### Association
- belongs_to :user
- has_many :massage, through: :massages_groups
- has_many :image, through: : images_groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|massage_id|integer|null: false, foreign_key: true|
|massage|string|null: false, dependent: true|
|user_id|integer|null: false, foreign_key: true, dependent: true|
|group_id|integer|null: false, foreign_key: true, dependent: true|
|time|date|null: false, dependent: true|
- belongs_to :user
- has_many :group, through: :massages_groups

## imagesテーブル
|Column|Type|Options|
|------|----|-------|
|image_id|integer|null: false, foreign_key: true, dependent: true|
|image|variant|dependent: true|
|user_id|integer|null: false, foreign_key: true, dependent: true|
|group_id|integer|null: false, foreign_key: true, dependent: true|
|time|date|null: false, dependent: true|

### Association
- belongs_to :user
- has_many :group, through: :images_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group



## massages_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|massage_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :massage
- belongs_to :group

## images_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|image_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :image
- belongs_to :group