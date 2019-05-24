# .bashrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm

export NGINX_HOME=/usr/local/nginx
export PATH=$PATH:$NGINX_HOME/sbin

alias python="python3.7"

# .bash_profile 

# nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
source ~/.nvm/nvm.sh

# java
export JAVA_HOME=`/usr/libexec/java_home -v 1.8`
export PATH=${JAVA_HOME}/bin:$PATH

# nginx
export NGINX_HOME=/usr/local/nginx
export PATH=$PATH:$NGINX_HOME/sbin

# Setting PATH for Python 3.6
# The original version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.6/bin:${PATH}"
export PATH
if command -v pyenv 1>/dev/null 2>&1; then
  eval "$(pyenv init -)"
fi
export PATH="/usr/local/opt/sqlite/bin:$PATH"

# setting mysql
export PATH=${PATH}:/usr/local/mysql/bin

# Setting PATH for Python 3.7
# The original version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.7/bin:${PATH}"
export PATH
# python 默认3.7
alias python="python3.7"