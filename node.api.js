export default options => ({
  webpack: (config, { defaultLoaders }) => {
    config.module.rules = [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },
      ...config.module.rules
    ]
    return config
  }
})
