import conf from "./conf/conf";

function App() {
  console.log(conf.appwriteUrl);
  console.log(conf.appwriteBucketID);
  console.log(conf.appwriteCollectionID);
  console.log(conf.appwriteDatabaseID);
  console.log(conf.appwriteProjectID);

  return (
    <>
      <h1>A blog app with Appwirte</h1>
    </>
  );
}

export default App;
