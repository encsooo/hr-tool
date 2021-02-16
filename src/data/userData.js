import {nanoid} from "nanoid"

const allData = [
    {
        firstName: "John",
        secondName: "Doe",
        title: "CEO",
        username: "johnny_does",
        password: "1234",
        id: nanoid(),
        admin: false,
        urlPhoto: "https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_960_720.jpg",
        email: "jhonnyboy@megacorp.com",
        mobile: "012334567",
        start: "2001.02.17",
        emergencyContact: "Tifanny Doe, 70457474"
    },

    {
        firstName: "Jane",
        secondName: "Neu",
        title: "Office Manager",
        username: "jane_neu",
        password: "1234",
        id: nanoid(),
        admin: false,
        urlPhoto: "https://cdn.pixabay.com/photo/2017/08/25/21/46/upset-2681502_960_720.jpg",
        email: "jane_neu@megacorp.com",
        mobile: "0123363567",
        start: "2011.02.17",
        emergencyContact: "Jan Neu, 012345"
    },

    {
        firstName: "Sharon",
        secondName: "Stoned",
        title: "HR",
        username: "sstoned",
        password: "1234",
        id: nanoid(),
        admin: true,
        urlPhoto: "https://cdn.pixabay.com/photo/2017/11/02/06/37/beautiful-2910260_960_720.jpg",
        email: "sstoned@megacorp.com",
        mobile: "012345679",
        start: "2008.07.17",
        emergencyContact: "Michael Douglas, 70457474"
    },

    {
        firstName: "Rick",
        secondName: "Dahlmüller",
        title: "PR",
        username: "rickyreck",
        password: "1234",
        id: nanoid(),
        admin: false,
        urlPhoto: "https://cdn.pixabay.com/photo/2018/01/04/21/15/young-3061652_960_720.jpg",
        email: "jhonnyboy@megacorp.com",
        mobile: "012334567",
        start: "2001.05.17",
        emergencyContact: "Rick Roll, 987654321"
    },

    {
        firstName: "Morty",
        secondName: "Python",
        title: "CTO",
        username: "momo89",
        password: "12342",
        id: nanoid(),
        admin: false,
        urlPhoto: "https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_960_720.jpg",
        email: "jmomo89@megacorp.com",
        mobile: "012334567",
        start: "2001.02.17",
        emergencyContact: "Liza M. Nelly, 70457474"
    },

    {
        firstName: "Xavier",
        secondName: "Some",
        title: "Assistant Manager",
        username: "some_xavier",
        password: "1234",
        id: nanoid(),
        admin: false,
        urlPhoto: "https://cdn.pixabay.com/photo/2020/04/19/18/46/company-5064997_960_720.jpg",
        email: "some_xavier@megacorp.com",
        mobile: "012334567",
        start: "2002.02.11",
        emergencyContact: "Trixie Mattel, 7777777"
    },

    {
        firstName: "Eniko",
        secondName: "McEnister",
        title: "Senior Developer",
        username: "crazycatlady666",
        password: "1234",
        id: nanoid(),
        admin: true,
        urlPhoto: "https://cdn.pixabay.com/photo/2017/07/03/09/54/dog-2467149_960_720.jpg",
        email: "crazycatlady666@megacorp.com",
        mobile: "012345678",
        start: "2001.02.17",
        emergencyContact: "Ella von den Müllerbergen, 7777777"
    },

    {
        firstName: "Ines",
        secondName: "Schwarz",
        title: "Senior Developer",
        username: "luna",
        password: "1234",
        admin: true,
        id: nanoid(),
        urlPhoto: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg",
        email: "luna@megacorp.com",
        mobile: "012345679",
        start: "2001.02.17",
        emergencyContact: "Rick Mortison, 70457474"
    },

    {
        firstName: "Lorem",
        secondName: "Dixit",
        title: "Senior Developer",
        username: "loremdixit",
        password: "1234",
        admin: true,
        id: nanoid(),
        urlPhoto: "https://cdn.pixabay.com/photo/2015/03/27/13/16/cat-694730_960_720.jpg",
        email: "loremdixit@megacorp.com",
        mobile: "012345677",
        start: "2001.02.17",
        emergencyContact: "Robert Pattison, 11112222"
    }
]

export default allData