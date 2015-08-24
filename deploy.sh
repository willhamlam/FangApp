#ssh user
ROOT_USER=weazmdev
#remote host
HOST=abc.weazm.com
#remote path
REMOTE_PATH=/data/www/
#ssh key password if any
SSH_KEY_PASSWD=kobebryant

git push origin master

ssh $ROOT_USER@$HOST "
cd ${REMOTE_PATH} && 
git pull coding master&& 
gulp build &&
gulp cdn &&
gulp replace &&
exit"
echo 'deployed'