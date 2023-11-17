export const onPostBuild = ({ netlifyConfig }) => {
  console.log("Amending publish directory to 'static'")
  netlifyConfig.build.publish = "static"
}
