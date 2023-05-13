export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || 'https://th.bing.com/th/id/R.d80843ef4c49f456eb9442295ff8ebc6?rik=KxjNdoc2GnFhRQ&riu=http%3a%2f%2flogbook.72ndvfw.org%2fforum%2fext%2fdark1%2fmemberavatarstatus%2fimage%2favatar.png&ehk=3%2f3%2be%2bJaduTC1HJFYUQ1ZN2%2fI4GUAJ4Wzt8lKCcadys%3d&risl=&pid=ImgRaw&r=0' } alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "country",
    width: 100,
  },
  {
    field: "city",
    headerName: "city",
    width: 100,
  },
  {
    field: "phone",
    headerName: "phone",
    width: 100,
  },
];

//temporary data
