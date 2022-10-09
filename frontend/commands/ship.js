// Ship Command
//
// This command is used to ship a parcel from one address to another.
// When you call it it will ask you a series of questions in the channel you called it in.
// It will then send you a list of shipping options and ask you to select one.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

const { get_rates } = require('../utils/rates.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ship')
        .setDescription('Ship a parcel from one address to another'),
    async execute(interaction) {
        // ask for origin address line 1
        await interaction.reply({ content: 'What is the origin address line 1?', ephemeral: false });

        // wait for response
        const originAddressLine1 = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.editReply({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for origin address line 2
        await interaction.followUp({ content: 'What is the origin address line 2?', ephemeral: false });

        // wait for response
        const originAddressLine2 = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.editReply({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for origin address city
        await interaction.followUp({ content: 'What is the origin address city?', ephemeral: false });

        // wait for response
        const originAddressCity = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.editReply({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for origin address state
        await interaction.followUp({ content: 'What is the origin address state?', ephemeral: false });

        // wait for response
        const originAddressState = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.editReply({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for origin address country
        await interaction.followUp({ content: 'What is the origin address country?', ephemeral: false });
        
        // wait for response
        const originAddressCountry = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.editReply({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for origin address zip
        await interaction.followUp({ content: 'What is the origin address zip?', ephemeral: false });

        // wait for response
        const originAddressZip = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.editReply({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for destination address line 1
        await interaction.followUp({ content: 'What is the destination address line 1?', ephemeral: false });

        // wait for response
        const destinationAddressLine1 = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.editReply({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for destination address line 2
        await interaction.followUp({ content: 'What is the destination address line 2?', ephemeral: false });

        // wait for response
        const destinationAddressLine2 = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.editReply({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for destination address city
        await interaction.followUp({ content: 'What is the destination address city?', ephemeral: false });

        // wait for response
        const destinationAddressCity = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.editReply({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for destination address state
        await interaction.followUp({ content: 'What is the destination address state?', ephemeral: false });

        // wait for response
        const destinationAddressState = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.editReply({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });
            
        // ask for destination address country
        await interaction.followUp({ content: 'What is the destination address country?', ephemeral: false });

        // wait for response
        const destinationAddressCountry = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.editReply({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for destination address zip
        await interaction.followUp({ content: 'What is the destination address zip?', ephemeral: false });

        // wait for response
        const destinationAddressZip = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.editReply({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for weight
        await interaction.followUp({ content: 'What is the weight? (lbs)', ephemeral: false });

        // wait for response
        const weight = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.editReply({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for length

        await interaction.followUp({ content: 'What is the length? ', ephemeral: false });

        // wait for response
        const length = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.editReply({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for width
        await interaction.followUp({ content: 'What is the width? (in)', ephemeral: false });

        // wait for response
        const width = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.editReply({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for height
        await interaction.followUp({ content: 'What is the height? (in)', ephemeral: false });
        
        // wait for response
        const height = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.editReply({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // combine our address lines into an object that we can pass to the rates function
        const originAddress = {
            "street1": originAddressLine1,
            "street2": originAddressLine2,
            "city": originAddressCity,
            "state": originAddressState,
            "zip": originAddressZip,
            "country": originAddressCountry
        };

        // combine our address lines into an object that we can pass to the rates function
        const destinationAddress = {
            "street1": destinationAddressLine1,
            "street2": destinationAddressLine2,
            "city": destinationAddressCity,
            "state": destinationAddressState,
            "zip": destinationAddressZip,
            "country": destinationAddressCountry
        };

        // create our parcel object
        const parcel = {
            "weight": weight,
            "length": length,
            "width": width,
            "height": height,
            "distance_unit": "in",
            "mass_unit": "lb"
        };

        // talk to our api wrapper
        rates = get_rates(originAddress, destinationAddress, parcel);

        // build our rate embed
        const rateEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Rates')
            .setDescription('Here are the rates for your shipment.')
            .addFields(
                { name: 'USPS', value: rates.usps },
                { name: 'UPS', value: rates.ups },
                { name: 'FedEx', value: rates.fedex },
            )
            .setTimestamp();

        // send our rate embed
        await interaction.followUp({ embeds: [rateEmbed] });
    },
};