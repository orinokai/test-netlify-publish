export const onBuild = ({ netlifyConfig }) => {
  console.log("Amending publish directory to 'static'")
  netlifyConfig.build.publish = "static"
}
