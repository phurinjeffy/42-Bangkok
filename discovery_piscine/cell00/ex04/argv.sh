if [ "$#" -eq 0 ]; then
	echo "No arguments supplied"
else
	i=0
	while [[ "$i" -lt 3 && "$i" -lt "$#" ]]; do
		((i++))
		echo "${!i}"
	done
fi
