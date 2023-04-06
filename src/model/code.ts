import mongoose from "mongoose";

export interface codeAttrs {
  code: number;
}

interface codeModel extends mongoose.Model<codeDoc> {
  build(attrs: codeAttrs): codeDoc;
}

export interface codeDoc extends mongoose.Document, codeAttrs {
  code: number;
  created_at?: Date;
  updated_at?: Date;
}

const codeSchema = new mongoose.Schema<codeDoc>(
  {
    code: {
      type: Number,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

codeSchema.statics.build = (attrs: codeAttrs) => {
  return new Code(attrs);
};

const Code = mongoose.model<codeDoc, codeModel>("Code", codeSchema);
export { Code };
