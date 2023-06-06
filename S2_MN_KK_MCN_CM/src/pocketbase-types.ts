/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Articles = "articles",
	Lieux = "lieux",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ArticlesRecord = {
	titre?: string
	chapo?: string
	image?: string
	description?: string
	favoris?: boolean
}

export type LieuxRecord = {
	nom?: string
	image?: string
	region?: string
	difficulte?: string
	description?: string
	favoris?: boolean
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ArticlesResponse = Required<ArticlesRecord> & BaseSystemFields
export type LieuxResponse = Required<LieuxRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	articles: ArticlesRecord
	lieux: LieuxRecord
	users: UsersRecord
}

export type CollectionResponses = {
	articles: ArticlesResponse
	lieux: LieuxResponse
	users: UsersResponse
}