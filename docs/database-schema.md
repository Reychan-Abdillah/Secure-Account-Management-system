# Database Schema

## User Collection

{
  _id: ObjectId
  email: String (unique)
  password: String (hashed)
  isVerified: Boolean
  createdAt: Date
}


- Email must be unique

