import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    nama: {
        type: 'String',
        required: [true, 'masukan nama karyawan']
    },
    email: {
        type: 'String',
        required: [true,'masukan email']
    },
    password: {
        type: 'String',
        required: [true,'masukan password']
    },
    posisi:{
        type: 'String',
        required: [true,'masukan posisi karyawan']
    },
    role: {
        type: 'String',
        required: [true,'masukan role karyawan']
    },
    reveral: {
        type: 'String',
        required: [true,'masukan kode reveral']
    },
    foto: String
});

export default model('User', userSchema);